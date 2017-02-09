import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <ul className="movie-list">
      {props.movies.map(movie => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            overview={movie.overview}
            onCloseMovie={props.onCloseMovie}
            onAddMovie={props.onAddMovie}
          />
        );
      })};
    </ul>
  );
};

// ESLint React prop-type validation
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired,
  onCloseMovie: React.PropTypes.func.isRequired,
  onAddMovie: React.PropTypes.func.isRequired
};

export default MovieList;
