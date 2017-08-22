const mongoose = require('mongoose');
const Movie = require('../models/movie');

exports.getAll = () => Movie.find({});