const movies = require('../connection/movies');

const movieNames = async () => {
  const response = await movies.getMovies();

  return response.map(e => e.title)
};

module.exports = {
  movieNames,
};
