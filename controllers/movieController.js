const movies = require('../connection/movies');
const movieService = require('../services/movieServices');

const getAllMovies = async (req, res) => {
  const response = await movies.getMovies();

  res.status(200).json(response);
};

const getAllMoviesByName = async (req, res) => {
  const response = await movieService.movieNames();

  res.status(200).json(response);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const response = await movieService.getById(id);

  res.status(200).json(response[0]);
};

module.exports = { getAllMovies, getAllMoviesByName, getMovieById };
