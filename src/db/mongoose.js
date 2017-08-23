const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/node-cinema';
const options = {
    useMongoClient: true,
    native_parser: true,
    poolSize: 5,
    // user: '',
    // password: '',
};

mongoose.connect(MONGODB_URI, options)
    .then(() => {
        console.log('Connected to database successfully.');
    })
    .catch((err) => {
        console.log(err);
        process.on('SIGINT', () => {
            process.stdout.write('GRACEFUL SHUTDOWN');
        //    db.stop(function(err) {
        //      process.exit(err ? 1 : 0);
        //    });
        });
    });

module.exports = mongoose;
