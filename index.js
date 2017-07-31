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
logConfigs = { host, port: logstashPort, node_name };

// MIDDLEWARES
app.use(bodyParser.json());

// winston.add(winston.transports.Logstash, {
//     host: logConfigs.host,
//     port: logConfigs.port,
//     node_name: logConfigs.node_name
// });

winston.add(winston.transports.Logstash, logConfigs);

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorized: true
        })
    ]
}));



// ROUTES
const routesV1 = require('./src/routes/v1')(app);

// app.get('/', versioning({
//     '1.0.0': rootV1,
//     '2.2.1': rootV2
// }));

app.get('/', (req, res, next) => {
    res.send('Hey you!!!').end();
    next();
});

app.get('/error', (req, res, next) => {
    return next(new Error('Log this error to the console.'));
})

// SERVER
app.listen(port, () => {
    winston.info('App running on port %d. Environment: %s', port, process.env.NODE_ENV);
});