import React from 'react';
import Movie from './Movie';

const Favorites = props => {
  return (
    <div>
      <h1>The My-terion Collection.</h1>
      <h3>You love it.</h3>
      <ul className="Favorites">
        {props.favorites.map((movie, index) => {
          return (
            <div key={index}>
              <Movie
                key={index}
                id={index}
                poster={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
          />
              <div className="deleteButton">
                <button type="submit"
                  onSubmit={(event) => props.onClick(event)}>Delete from Favorites!
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
