import React from 'react';
import { Link } from 'react-router-dom';


const Movie = props => {
  return (
    <div className="movie-detail col-lg-6">
      <div className="poster">
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w154${props.poster}`}
        />
      </div>
      <div className="movieTitle">
        <h2>{props.originalTitle}</h2>
        <p>{props.overview}</p>
        <Link to={`/MovieDetail/${props.id}`} className="movie-link">
          <button
            className="viewDetailsButton"
            >View Details
          </button>
        </Link>
        <button
          className="addMovieButton"
          onClick={() => props.onAddMovie(props.id)}>Add to Favorites
        </button>
      </div>
    </div>
  );
};


// ESLint React prop-type validation
Movie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  originalTitle: React.PropTypes.string.isReqiuired,
  overview: React.PropTypes.string.isReqiuired,
  onAddMovie: React.PropTypes.func.isReqiuired
};

export default Movie;
