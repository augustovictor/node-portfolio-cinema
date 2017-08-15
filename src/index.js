// MODULES
const winston        = require('winston');
const expressWinston = require('express-winston');
require('winston-logstash');

// DEFINITIONS
const port            = process.env.PORT || 3000;
const logstashConfigs = process.env.LOGSTASH_CONFIGS && JSON.parse(process.env.LOGSTASH_CONFIGS);


// Log the whole request and response body
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
expressWinston.bodyBlacklist.push('token', 'password');
const app = require('./app');
const routesV1 = require('./routes/v1');

const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            timestamp: () => new Date().toLocaleString(),
            handleExceptions: true,
            humanReadableUnhandledException: true
        })
    ]
});

logger.add(winston.transports.Logstash, {
    host: logstashConfigs.host, // This is the service name in docker-compose.yml
    port: logstashConfigs.port,
    node_name: logstashConfigs.node_name,
    handleExceptions: true,
    humanReadableUnhandledException: true
});

app.use(expressWinston.logger({
    transports: [
        logger
    ]
}));

app.use('/', routesV1);

// SERVER
app.listen(port, () => {
    winston.info('App running on port %d. Environment: %s', port, process.env.NODE_ENV);
});