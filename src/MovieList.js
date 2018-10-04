import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="MovieList">
      {props.returnedMovies.map((movie) => {
        return (
          <div key={movie._id}>
            <Movie
              key={movie._id}
              id={movie._id}
              poster={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              title={movie.title}
              overview={movie.overview}
        />
            <div className="AddButton">
              <button
                type="submit" 
                onClick={() => props.onAddFavorite(
                  {title: movie.title, poster: `https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                )}>
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
