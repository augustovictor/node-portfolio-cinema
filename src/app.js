const express    = require('express');
const bodyParser = require('body-parser');
const routesV1   = require('./routes/v1');

const app = express();
// require('./db/mongoose');

// MIDDLEWARE
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'test') {
    app.use('/api/v1', routesV1);
}

module.exports = app;
