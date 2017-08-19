const request = require('supertest');
const expect = require('expect');
const app = require('../../app');

const defaultMovie = {
    id: 1,
    title: 'Best movie ever',
    desc: 'This is a great movie indeed!',
};

describe('GET /movies', () => {
    it('should return an array of movies', (done) => {
        request(app)
            .get('/api/v1/movies')
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeA('array');
                expect(res.body[0]).toInclude(defaultMovie);
            })
            .end(done);
    });
});
