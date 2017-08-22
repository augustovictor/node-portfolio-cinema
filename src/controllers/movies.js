const movies = require('../repositories/movies');

exports.root = (req, res, next) => {
    res.send('Hey you!!!').end();
    next();
};

exports.error = (req, res, next) => next(new Error('Log this error to the console.'));

exports.movies = (req, res) => {
    const defaultMovies = [{
        id: 1,
        title: 'Best movie ever',
        desc: 'This is a great movie indeed!',
    }];
    res.json(defaultMovies);

    // movies.getAll()
    //     .then(movies => {
    //         res.json(movies);
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     });

};
