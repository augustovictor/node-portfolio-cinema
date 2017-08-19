const express = require('express');
const router = express.Router();

const controller = require('../../controllers/movies');
router.get('/', controller.root);
router.get('/error', controller.error);
router.get('/movies', controller.movies);

module.exports = router;
