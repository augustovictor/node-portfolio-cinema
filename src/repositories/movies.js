const mongoose = require('mongoose');
const Movie = require('../models/movie');

exports.all = () => Movie.find({});