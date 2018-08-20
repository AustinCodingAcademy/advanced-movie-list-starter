import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import './index.css';

const MovieListItem = (props) => {
  return (
    <div className="MovieListItem">
      <img src={props.movie.posterPath} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <Button
        type="button"
        className="btn-remove"
        onClick={() => props.onRemove(props.movie._id)}>Remove Movie</Button>
    </div>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
};
