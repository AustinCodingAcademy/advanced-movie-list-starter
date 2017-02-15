import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

const Movie = props => {
  return (
    <li>
      <img src={props.posterPath} alt="movie poster" />
      <h3>{props.title}</h3>
      <Button
        onClick={event => props.onClickRemoveMovie(event, props._id)}
        type="button"
        name="remove-movie"
        className="remove-movie"
        bsStyle="danger"
      >
        Remove movie
      </Button>

    </li>
  );
};

Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
  onClickRemoveMovie: PropTypes.func.isRequired
};

export default Movie;
