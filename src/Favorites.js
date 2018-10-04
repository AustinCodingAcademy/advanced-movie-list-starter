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
            <div key={movie._id}>
              <Movie
                key={movie._id}
                id={movie._id}
                poster={movie.poster}
                title={movie.title}
                overview={movie.overview}
                onDelete={props.onDelete}
                />
              <div className="deleteButton">
                <button type="submit"
                  onClick={() =>
                    props.onDelete(movie._id)
                  }>
                    Delete from Favorites!
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>);
};

// Props Validation
Favorites.propTypes = {
  // overview: React.PropTypes.string.isRequired,
  // title: React.PropTypes.string.isRequired,
  // id: React.PropTypes.string.isRequired,
  // key: React.PropTypes.string.isRequired,
  // poster: React.PropTypes.string.isRequired,
  favorites: React.PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired
};







export default Favorites;
