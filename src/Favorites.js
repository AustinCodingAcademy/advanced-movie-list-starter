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
                poster={movie.poster}
                title={movie.title}
                overview={movie.overview}
          />
              <div className="deleteButton" key={movie.id}>
                <button type="submit" key={movie.id}
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
  // overview: React.PropTypes.string.isRequired,
  // title: React.PropTypes.string.isRequired,
  // id: React.PropTypes.string.isRequired,
  // key: React.PropTypes.string.isRequired,
  // poster: React.PropTypes.string.isRequired,
  favorites: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};







export default Favorites;
