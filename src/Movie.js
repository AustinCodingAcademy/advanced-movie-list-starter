import React from 'react';

const Movie = props => {
  return (
    <div className="movie-detail">
      <div className="poster">
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w154${props.poster}`}
        />
      </div>
      <div className="movieTitle">
        <h2>{props.title}</h2>
      </div>
      <button
        className="deleteMovieButton"
        onRemoveMovie={() => props.onRemoveMovie(props.id)}>Remove Movie
      </button>
    </div>
  );
};


// ESLint React prop-type validation
Movie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isReqiuired,
  onRemoveMovie: React.PropTypes.func.isReqiuired
};

export default Movie;
