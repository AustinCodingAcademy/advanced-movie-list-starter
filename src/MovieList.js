import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="MovieList">
      {props.returnedMovies.map((movie, index) => {
        return (
          <Movie
            key={index}
            id={index}
            poster={movie.poster_path}
            title={movie.title}
        />
        );
      })}
    </div>
  );
};

// Props Validation
MovieList.propTypes = {
  returnedMovies: React.PropTypes.array.isRequired,
};







export default MovieList;
