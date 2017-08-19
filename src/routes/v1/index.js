const express = require('express');
const controller = require('../../controllers/movies');

const router = express.Router();

router.get('/', controller.root);
router.get('/error', controller.error);
router.get('/movies', controller.movies);

module.exports = router;
