const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

if(process.env.NODE_ENV == 'test') {
    require('./routes/v1')(app);
}

process.on('SIGINT', function () {
    process.stdout.write('GRACEFUL SHUTDOWN');
//    db.stop(function(err) {
//      process.exit(err ? 1 : 0);
//    });
});

module.exports = app;