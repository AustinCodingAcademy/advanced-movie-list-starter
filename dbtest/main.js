const axios = require('axios');
const movie = 'jaws';

axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ab4bec4c09a675c9baa72dfe29d2ab6&language=en-US&query=${movie}&page=1&include_adult=false`)
  .then(resp => console.log(resp.data));
