const winston        = require('winston');
const expressWinston = require('express-winston');
require('winston-logstash');

const logstashConfigs = process.env.LOGSTASH_CONFIGS && JSON.parse(process.env.LOGSTASH_CONFIGS);

// Log the whole request and response body
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
expressWinston.bodyBlacklist.push('token', 'password');

const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            timestamp: () => new Date().toLocaleString(),
            handleExceptions: true,
            humanReadableUnhandledException: true,
        }),
    ],
});

logger.add(winston.transports.Logstash, {
    host: logstashConfigs.host, // This is the service name in docker-compose.yml
    port: logstashConfigs.port,
    node_name: logstashConfigs.node_name,
    handleExceptions: true,
    humanReadableUnhandledException: true,
});

module.exports = (app) => {
    app.use(expressWinston.logger({
        transports: [
            logger,
        ],
    }));
};
