
const express = require('express');
const { renderForm, fetchMovieData } = require('../controllers/movieController');

const router = express.Router();

router.get('/', renderForm);
router.get('/movie', fetchMovieData);

module.exports = router;
