module.exports.root = (req, res, next) => {
    // logger.info('New request');
    res.send('Hey you!!!').end();
    next();
};

module.exports.error = (req, res, next) => {
    return next(new Error('Log this error to the console.'));
}

module.exports.movies = (req, res, next) => {
    const defaultMovie = {
        id: 1,
        title: 'Best movie ever',
        desc: 'This is a great movie indeed!'
    };

    res.json([defaultMovie]);
};