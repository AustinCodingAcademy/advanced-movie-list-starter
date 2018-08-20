import React, { PropTypes } from 'react';
import MovieListItem from './MovieListItem/index.js';
import './index.css';

const MovieList = (props) => {

  return (
    <div className="MovieList">
      {
        props.movies.map(movie => {
          return (
            <MovieListItem
              movie={movie}
              key={movie._id}
              onRemove={props.onRemove}
            />
          );
        })
      }
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};
