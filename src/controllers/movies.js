const moviesRepo = require('../repositories/movies');
const CommonContract = require('../contracts/common');

exports.root = (req, res, next) => {
    res.send('Hey you!!!').end();
    next();
};

exports.error = (req, res, next) => next(new Error('Log this error to the console.'));

exports.movies = (req, res) => {
    return moviesRepo.getAll()
        .then((movies) => {
            res.json(movies);
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.newMovie = (req, res) => {
    const cc = new CommonContract();
    cc.isRequired(req.body.description, 'Description is required');
    cc.isRequired(req.body.releaseDate, 'Release date is required');
    if (!cc.isValid()) return res.status(400).send({ errors: cc.errors() });

    return res.send(req.body);
};
