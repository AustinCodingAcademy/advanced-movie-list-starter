import React from 'react';
import { Link } from 'react-router-dom';


const Movie = props => {
  return (
    <div className="Movie">
      <Link to={`/profile/${props.id}`} className="movie-link">
        <img src={`https://image.tmdb.org/t/p/w154/${props.posterPath}`} alt="" />
      </Link>
      <h2>{props.title}</h2>

      <p>{props.releaseDate}</p>
    </div>
  );
};

Movie.propTypes = {
  title: React.PropTypes.string.isRequired,
  overview: React.PropTypes.string.isRequired,
  releaseDate: React.PropTypes.string.isRequired
};

export default Movie;
