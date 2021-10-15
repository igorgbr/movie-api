const router = require('express').Router();
const moviesController = require('../controllers/movieController');

router.get('/', moviesController.getAllMovies);
router.get('/names', moviesController.getAllMoviesByName);

module.exports = router;
