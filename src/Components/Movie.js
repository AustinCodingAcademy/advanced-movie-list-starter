import React, {PropTypes} from 'react';

const Movie = props => {
  return (
    <div>
      <h2> {props.movieTitle} </h2>
      <h4> {props.overview}</h4>
      <h4> {props.releasedate} </h4>
    </div>
  );
};

Movie.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired

};

export default Movie;
