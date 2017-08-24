const moviesController = require('../../../controllers/movies');
const moviesRepository = require('../../../repositories/movies');

describe('Controller: Movies', () => {
    describe('Get all movies: movies()', () => {
        it('should return a list of movies', done => {
            const defaultMovies = [{
                id   : 1,
                title: 'Best movie ever',
                desc : 'This is a great movie indeed!',
            }];
            
            const req = {};
            const res = {
                json: function(movies) {
                    movies.should.deep.equal(defaultMovies);
                    done();
                }
            };
            sinon.stub(moviesRepository, 'getAll').resolves(defaultMovies);
            moviesController.movies(req, res);

        });
    });
});
