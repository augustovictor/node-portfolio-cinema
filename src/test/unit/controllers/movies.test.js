const moviesController = require('../../../controllers/movies');

describe('Controller: Movies', () => {
    describe('Get all movies: movies()', () => {
        it('should return a list of movies', () => {
            const defaultMovies = [{
                id: 1,
                title: 'Best movie ever',
                desc: 'This is a great movie indeed!',
            }];

            const req = {};
            const res = {
                json: function() {
                    return defaultMovies;
                }
            };
            moviesController.movies(req, res)
                .then(movies => console.log(movies));
        });
    });
});
