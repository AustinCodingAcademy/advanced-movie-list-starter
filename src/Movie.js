import React from 'react';

const Movie = props => {
  return (
    <div className="movie-detail col-lg-4">
      <div className="poster">
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w154${props.poster}`}
        />
      </div>
      <div className="movieTitle">
        <h2>{props.originalTitle}</h2>
        <p>{props.overview}</p>
      </div>
      <button
        className="addMovieButton"
        onClick={() => props.onAddMovie(props.id)}>Add to Favorites
      </button>
      <button
        className="removeMovieButton"
        onClick={() => props.onRemoveMovie(props.id)}>Remove Movie
      </button>
    </div>
  );
};


// ESLint React prop-type validation
Movie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  originalTitle: React.PropTypes.string.isReqiuired,
  overview: React.PropTypes.string.isReqiuired,
  onAddMovie: React.PropTypes.func.isReqiuired,
  onRemoveMovie: React.PropTypes.func.isReqiuired
};

export default Movie;
