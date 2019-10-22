import React, {PropTypes} from 'react';
import MovieToAdd from './MovieToAdd';

/* eslint-disable camelcase */
const MovieToAddList = props => {
  if (props.moviesToAdd.length > 0) {
    return (
      <div>
        {props.moviesToAdd.map((movie, index) => {
          return (
            <MovieToAdd
              key={index}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
              onAddMovieClick={() => props.addMovie(movie)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <h3>No Results</h3>
  );
};

MovieToAddList.propTypes = {
  moviesToAdd: PropTypes.array.isRequired
};

export default MovieToAddList;
