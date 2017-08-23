const moviesRepo = require('../repositories/movies');

exports.root = (req, res, next) => {
    res.send('Hey you!!!').end();
    next();
};

exports.error = (req, res, next) => next(new Error('Log this error to the console.'));

exports.movies = (req, res) => {
    moviesRepo.getAll()
        .then(movies => {
            res.json(movies);
        })
        .catch(err => {
            res.send(err);
        });

};
