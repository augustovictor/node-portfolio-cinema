const express = require('express');
const bodyParser = require('body-parser');

const versioning = require('express-routes-versioning');
const app = express();
app.use(bodyParser.json());

const routesV1 = require('./src/routes/v1')(app);

const port = process.env.PORT || 3000;


// app.get('/', versioning({
//     '1.0.0': rootV1,
//     '2.2.1': rootV2
// }));

app.get('/', (req, res, next) => {
    res.send('Hey you!!!').end();
    next();
});

app.listen(port, () => {
    console.log(`App running on ${ port }. Env: ${ process.env.NODE_ENV }`);
});