import React from 'react';

const Movie = movie => {
  return (
    <div className="Movie">
      <div className="Poster">
        <img
          alt="movie poster"
          src={movie.poster}
        />
      </div>
      <div className="MovieTitle">
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
};

// PropTypes Validation
//
// Movie.propTypes = {
//   poster: React.PropTypes.string.isRequired,
//   title: React.PropTypes.string.isRequired,
//   addFavorite: React.PropTypes.func.isRequired
// };




export default Movie;
