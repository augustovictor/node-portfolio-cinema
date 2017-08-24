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
