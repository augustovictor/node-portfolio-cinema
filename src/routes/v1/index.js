module.exports = server => {
    const controller = require('../../controllers/movies');
    const PATH = '/api/v1';

    server.get(PATH, controller.root);
    server.get(PATH + '/error', controller.error);
    server.get(PATH + '/movies', controller.movies);

    return server;
};
