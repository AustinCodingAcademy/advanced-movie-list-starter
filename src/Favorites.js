import React from 'react';
import Movie from './Movie';

const Favorites = props => {
  return (
    <div>
      <h1>The My-terion Collection.</h1>
      <h3>You love it.</h3>
      <ul className="Favorites">
        {props.favorites.map((movie) => {
          return (
            <div key={movie.id}>
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
          />
              <div className="deleteButton">
                <button type="submit"
                  onClick={() => props.onClick()}>Delete from Favorites!
              </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

// Props Validation
Favorites.propTypes = {
  favorites: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};







export default Favorites;
