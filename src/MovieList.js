import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => {
        return (
          <Movie
            key={index}
            poster={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
          />
        );
      })};
    </div>
  );
};

// ESLint React prop-type validation
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired,
};

export default MovieList;
