const axios = require('axios');

const TOKEN = "28f1d29e17231a8eb0e0e7c0337c448a"
async function getMovies() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}`);
        return response.data.results;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getMovies
}