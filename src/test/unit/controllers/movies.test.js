const moviesController = require('../../../controllers/movies');

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
                    console.log('Not getting here.. Dunno y.')
                    movies.should.deep.equal(defaultMovies);
                }
            };
            
            const stub = sinon.stub(moviesController, 'movies');
            stub.resolves(defaultMovies);

            moviesController.movies(req, res)
                .then(movies => {
                    movies.should.deep.equal(defaultMovies);
                    done();
                })
                .catch(done);

        });
    });
});
