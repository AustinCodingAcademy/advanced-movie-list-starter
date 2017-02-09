import React from 'react';

const Movie = props => {
  return (
    <div>
      <h2> {props.movieTitle} </h2>
      <h4> {props.overview}</h4>
      <h4> {props.releasedate} </h4>
    </div>
  );
};

export default Movie;
