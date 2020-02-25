require('dotenv').config()
const axios = require('axios')
const api = {
  getUser: function(username) {
    
    return axios.get( `https://api.github.com/users/${username}?client_id=${process.env.APIKEY}&client_secret=${process.env.SECRET}`)
  }
};

module.exports = api;
