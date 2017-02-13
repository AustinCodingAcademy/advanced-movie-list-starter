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
        <p>{props.overview}</p>
      </div>
    </div>
  );
};


// ESLint React prop-type validation
Movie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isReqiuired,
  overview: React.PropTypes.string.isReqiuired
};

export default Movie;
