const express = require('express');
const moviesController = require('../../controllers/movies');

const router = express.Router();

router.get('/', moviesController.root);
router.get('/error', moviesController.error);
router.get('/movies', moviesController.movies);

module.exports = router;
