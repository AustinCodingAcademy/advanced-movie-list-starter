import React from 'react';
import Movie from './Movie';

const MovieList = props => {

  return (
    <div className="MovieList">
      {props.movies.map(movie => {
        return (
          <Movie
            movie={movie}
            title={movie.title}
            posterPath={movie.poster}
            overview={movie.overview}
            releaseDate={movie.releaseDate}
            key={movie._id}
            id={movie._id}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
