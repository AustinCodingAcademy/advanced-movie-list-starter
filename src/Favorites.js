import React from 'react';
import FavoriteMovie from './FavoriteMovie';

const Favorites = props => {
  return (
    <div className="favorites-list">
      <h1>Favorite Movies</h1>
      <ul className="favorite-movies-list">
        {props.favoriteMovies.map(movie => {
          return (
            <FavoriteMovie
              key={movie._id}
              poster={movie.poster_path}
              title={movie.title}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  favoriteMovies: React.PropTypes.array
};
