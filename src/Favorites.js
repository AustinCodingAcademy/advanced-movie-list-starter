import React from 'react';
import FavoriteMovie from './FavoriteMovie';

const Favorites = props => {
  return (
    <div className="favorites-list">
      <h1>Favorite Movies</h1>
      <ul className="favorite-movies-list row">
        {props.favoriteMovies.map(movie => {
          return (
            <FavoriteMovie
              key={movie._id}
              id={movie._id}
              posterPath={movie.poster_path}
              title={movie.title}
              onClickRemove={props.onClickRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  favoriteMovies: React.PropTypes.array,
  onClickRemove: React.PropTypes.func.isRequired
};
