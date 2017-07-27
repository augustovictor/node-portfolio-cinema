// MODULES
const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');

// DEFINITIONS
const versioning = require('express-routes-versioning');
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(bodyParser.json());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
}));
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
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