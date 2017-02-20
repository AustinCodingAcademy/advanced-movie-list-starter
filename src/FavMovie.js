import React from 'react';

const FavMovie = props => {
  return (
    <div className="movie-detail col-lg-3">
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
        className="deleteMovieButton"
        onClick={() => props.onRemoveMovie(props.id)}>Remove Movie
      </button>
    </div>
  );
};


// ESLint React prop-type validation
FavMovie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  originalTitle: React.PropTypes.string.isReqiuired,
  overview: React.PropTypes.string.isReqiuired,
  onRemoveMovie: React.PropTypes.func.isReqiuired
};

export default FavMovie;
