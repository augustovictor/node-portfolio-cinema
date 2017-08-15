const express = require('express');
const bodyParser = require('body-parser');
const routesV1 = require('./routes/v1');

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'test') {
    app.use('/', routesV1);
}

process.on('SIGINT', function () {
    process.stdout.write('GRACEFUL SHUTDOWN');
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0);
//    });
});

module.exports = app;
