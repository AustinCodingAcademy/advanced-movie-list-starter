import axios from 'axios';
import { pushState } from 'redux-react-router';


export const ADD_MOVIE = 'ADD_MOVIE';
export const REQUEST_MOVIE_META = 'REQUEST_MOVIE_META';
export const RECEIVE_MOVIE_META = 'RECEIVE_MOVIE_META';
export const REQUEST_USER_MOVIES = 'REQUEST_USER_MOVIES';
export const INVALIDATE_USER_MOVIES = 'INVALIDATE_USER_MOVIES';
export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const CLEAR_MOVIE_SEARCH = 'CLEAR_MOVIE_SEARCH';

export function requestMovieMeta(movie) {
  return {
    type: REQUEST_MOVIE_META,
    movie
  };
}

function addUserMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
  };
}

function receiveMovieMeta(json) {
  return {
    type: RECEIVE_MOVIE_META,
    movieObject: json,
    receivedAt: Date.now()
  };
}

function requestUserMovies() {
  return {
    type: REQUEST_USER_MOVIES,
  };
}

function invalidateUserMovies() {
  return {
    type: INVALIDATE_USER_MOVIES,
  };
}

function receiveUserMovies(movieArray) {
  return {
    type: RECEIVE_USER_MOVIES,
    movieArray: movieArray,
    receivedAt: Date.now()
  };
}

export function clearMovieSearch() {
  return {
    type: CLEAR_MOVIE_SEARCH
  };
}



export function saveMovie(movieTitle, moviePosterPath) {
  return function (dispatch) {

    const movie = {
      movieTitle: movieTitle,
      moviePosterPath: moviePosterPath
    };

      // Initial dispatch to add the movie to the local store
    dispatch(addUserMovie(movie));

      // Return a Promise via Axios to wait for
    return axios.post('http://localhost:4000/movies' , {movie});

  };

}


// THUNK Action Creator
export function getUserMovies() {

  // THUNK automatically passes dispatch
  return function (dispatch) {
      // Initial dispatch to let the app know that a request has been made
    dispatch(requestUserMovies());

      // Return a Promise via Axios to wait for
    return axios({
      url: 'http://localhost:4000/movies',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      // When the response is received, dispatch the data (via action creator)

      .then(resp => {
        //const MovieArray = [];
        resp.data.forEach((obj) => {
          const movie = {
            movieTitle: obj.movie.movieTitle,
            moviePosterPath: obj.movie.moviePosterPath
          };
          dispatch(addUserMovie(movie));
        //  MovieArray.push(movie);
        });

        // I HAVE A BIG QUESTION HERE! (ABOUT MANIPULATING THINGS IN STATE IN REDUX)

        // console.log(MovieArray);
        // dispatch(receiveUserMovies(MovieArray));
      });
			// .catch(function(response){
			// 	dispatch(receiveError(response.data));
			// 	dispatch(pushState(null,'/error'));
			// })
  };
}

export function searchForMovie(searchValue) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
    dispatch(requestMovieMeta(searchValue));

    return axios({
      url: 'https://api.themoviedb.org/3/search/movie?api_key=001c9b0a8ef1338a07d482eceb601f9c&language=en-US&query=$' + searchValue + '&page=1&include_adult=false',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
        // When the response is received, dispatch the data (via action creator)
        .then(resp => {
          dispatch(receiveMovieMeta(resp.data.results));
        });
        // .catch(function(response){
        // 	dispatch(receiveError(response.data));
        // 	dispatch(pushState(null,'/error'));
        // })
  };
}

export function deleteMovie() {
  return;
}
