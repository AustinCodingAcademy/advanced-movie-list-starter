import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="MovieList">
      {props.returnedMovies.map((movie) => {
        return (
          <div key={movie.id}>
            <Movie
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
        />
            <div className="AddButton">
              <button
                type="submit"
                onClick={props.onAddFavorite(event)}>
                  Add to Favorites!
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Props Validation
MovieList.propTypes = {
  returnedMovies: React.PropTypes.array.isRequired,
  onAddFavorite: React.PropTypes.func.isRequired
};







export default MovieList;
