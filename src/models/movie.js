const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['action', 'commedy', 'horror']
    }
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
