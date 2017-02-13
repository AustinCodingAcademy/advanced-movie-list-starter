import React, {PropTypes} from 'react';


const Movie = props => {
  return (
    <div>
      <h2> {props.movieTitle} </h2>
      <img src={`https://image.tmdb.org/t/p/w154` + props.posterPath} thumbnail />
      <p> {props.overview}</p>
      <p> release date- {props.releasedate} </p>
      <button
        onClick={() => props.addmovie(props.movies)}>
      Add movie to list
    </button>
    </div>
  );
};

Movie.propTypes = {
  movies: PropTypes.object.isRequired,
  movieTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  addmovie: PropTypes.func.isRequired
};

export default Movie;
