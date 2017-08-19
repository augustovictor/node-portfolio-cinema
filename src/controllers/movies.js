exports.root = (req, res, next) => {
    // logger.info('New request');
    res.send('Hey you!!!').end();
    next();
};

exports.error = (req, res, next) => next(new Error('Log this error to the console.'));

exports.movies = (req, res) => {
    const defaultMovie = {
        id: 1,
        title: 'Best movie ever',
        desc: 'This is a great movie indeed!',
    };

    res.json([ defaultMovie ]);
};
