import React from 'react';


const Movie = props => {
  return (
    <div className="Movie">
      <img src={props.movies.posterPath} alt="" />
      <h2>{props.movies.movieTitle}</h2>
      <p>{props.movies.movieOverview}</p>
    </div>
  );
};

Movie.propTypes = {
  movies: React.PropTypes.object.isRequired
};

export default Movie;
