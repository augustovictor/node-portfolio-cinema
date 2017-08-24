const mongoose = require('mongoose');
const Movie = require('../models/movie');

exports.getAll = () => new Promise(resolve => {
    resolve([{
        id   : 1,
        title: 'Best movie ever',
        desc : 'This is a great movie indeed!',
    }]);
});//Movie.find({}); // Uncomment this when database exists