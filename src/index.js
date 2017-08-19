const winston  = require('winston');
const port     = process.env.PORT || 3000;

const app      = require('./app');
const routesV1 = require('./routes/v1');

// The logs should be applied before the routes
require('./conf/logs')(app);
app.use('/api/v1', routesV1);

// SERVER
app.listen(port, () => {
    winston.info('App running on port %d. Environment: %s', port, process.env.NODE_ENV);
});