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
            overview={movie.overview}
            addFavorite={props.addFavorite}
        />
        );
      })}
    </div>
  );
};

// Props Validation
MovieList.propTypes = {
  returnedMovies: React.PropTypes.array.isRequired,
  addFavorite: React.PropTypes.func.isRequired
};







export default MovieList;
