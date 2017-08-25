const defaultMovie = {
    id: 1,
    title: 'Best movie ever',
    desc: 'This is a great movie indeed!',
};

describe('GET /movies', () => {
    it('should return an array of movies', (done) => {
        request
            .get('/api/v1/movies')
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeA('array');
                // Uncomment this after seeds file
                // expect(res.body[0]).toInclude(defaultMovie);
            })
            .end(done);
    });
});

describe.only('POST /movies', () => {
    it('should not add a new movie without required attributes', done => {
        const movie = { title: 'New movie' };
        const mockErrors = {
            errors: [
                { message: 'Description is required' },
                { message: 'Release date is required' }
            ]
        };

        request
            .post('/api/v1/movies')
            .send(movie)
            .expect(400)
            .expect(res => {
                expect(res.body).toInclude(mockErrors);
            })
            .end(done);
    });
});