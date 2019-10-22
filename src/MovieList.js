import React, {PropTypes} from 'react';
import MovieListItem from './MovieListItem';

/* eslint-disable camelcase */
const MovieList = props => {
  if (props.movies.length > 0) {
    return (
      <div>
        {props.movies.map((movie, index) => {
          return (
            <MovieListItem
              key={index}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
              onDeleteMovieClick={() => props.deleteMovie(movie._id)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <h3>No Movies Selected</h3>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
