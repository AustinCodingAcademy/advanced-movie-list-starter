import React, {PropTypes} from 'react';
import {
  Col,
  Button
} from 'react-bootstrap';

const MovieListItem = props => {
  const posterPath = `https://image.tmdb.org/t/p/w154${props.posterPath}`;

  return (
    <Col md={4}>
      <img src={posterPath} alt="movie poster" />
      <h4>{props.movieTitle}</h4>
      {console.log(props.movieTitle)}
      <p>Realese date - {props.releaseDate}</p>
      <p>{props.overview}</p>
      <Button
        bsStyle="danger"
        onClick={props.deleteMovieClick}>
          Remove
      </Button>
    </Col>
  );
};

MovieListItem.propTypes = {
  posterPath: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  deleteMovieClick: PropTypes.func.isRequired
};

export default MovieListItem;
