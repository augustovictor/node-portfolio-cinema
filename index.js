// MODULES
const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');
require('winston-logstash');

// DEFINITIONS
const versioning = require('express-routes-versioning');
const app = express();
const port = process.env.PORT || 3000;
let { port: logstashPort, host, node_name } = JSON.parse(process.env.LOGSTASH_CONFIGS);


// MIDDLEWARES
app.use(bodyParser.json());

// Log the whole request and response body
expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')

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
    host, // This is the service name in docker-compose.yml
    port: logstashPort,
    node_name,
    handleExceptions: true,
    humanReadableUnhandledException: true
});

app.use(expressWinston.logger({
    transports: [
        logger
    ]
}));

// ROUTES
const routesV1 = require('./src/routes/v1')(app);

// app.get('/', versioning({
//     '1.0.0': rootV1,
//     '2.2.1': rootV2
// }));

app.get('/', (req, res, next) => {
    // logger.info('New request');
    res.send('Hey you!!!').end();
    next();
});

app.get('/error', (req, res, next) => {
    return next(new Error('Log this error to the console.'));
});

// SERVER
app.listen(port, () => {
    winston.info('App running on port %d. Environment: %s', port, process.env.NODE_ENV);
});

process.on('SIGINT', function() {
    process.stdout.write('GRACEFUL SHUTDOWN');
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0);
//    });
});