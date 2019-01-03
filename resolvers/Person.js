const axios = require('axios');

module.exports = {
  homeworld: async (parent, args) => {
    return await axios.get(parent.homeworld)
  },
  films: async (parent, args) => {
    return await Promise.all(parent.films.map(film => axios.get(film)));
  }
}