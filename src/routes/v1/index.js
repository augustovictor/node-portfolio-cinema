const express = require('express');
const router = express.Router();

const controller = require('../../controllers/movies');
const PATH = '/api/v1';

router.get(PATH, controller.root);
router.get(PATH + '/error', controller.error);
router.get(PATH + '/movies', controller.movies);

module.exports = router;
