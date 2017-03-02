import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="movie-list col-lg-12">
      {props.returnedMovies.map(movie => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            originalTitle={movie.original_title}
            overview={movie.overview}
            onAddMovie={props.onAddMovie}
          />
        );
      })}
    </div>
  );
};

// ESLint React prop-type validation
MovieList.propTypes = {
  returnedMovies: React.PropTypes.array.isRequired,
  onAddMovie: React.PropTypes.func.isRequired
};

export default MovieList;
