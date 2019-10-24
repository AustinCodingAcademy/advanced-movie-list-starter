import React from 'react';
import FavMovie from './FavMovie';

const FavMovieList = props => {
  return (
    <div className="movie-list col-lg-12">
      {props.selectedFavMovies.map((movie, index) => {
        return (
          <FavMovie
            key={index}
            id={movie.id}
            poster={movie.poster_path}
            originalTitle={movie.original_title}
            overview={movie.overview}
            onRemoveMovie={props.onRemoveMovie}
          />
        );
      })}
    </div>
  );
};

// ESLint React prop-type validation
FavMovieList.propTypes = {
  selectedFavMovies: React.PropTypes.array.isRequired,
  onRemoveMovie: React.PropTypes.func.isRequired
};

export default FavMovieList;
