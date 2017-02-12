import React from 'react';
import MoviePoster from './MoviePoster';

const FavoriteMovie = props => {
  return (
    <li className="favorite-movie">
      <MoviePoster
        posterPath={props.posterPath}
      />
      <h2>{props.title}</h2>
      <button onClick={() => props.onClickRemove()}>
        Remove
      </button>
    </li>
  );
};

export default FavoriteMovie;

FavoriteMovie.propTypes = {
  posterPath: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  onClickRemove: React.PropTypes.func.isRequired
};
