import React, {PropTypes} from 'react';
import {
  Col,
  Row,
  Button,
  Grid
} from 'react-bootstrap';
import './AddMovie.css';

/* eslint-disable camelcase */
const AddMovie = props => {
  const posterPath = `https://image.tmdb.org/t/p/w154${props.posterPath}`;

  if (props.addMovie.length > 0) {
    return (
      <Grid>
        <Row className="add-movie show-grid">
          <Col md={3}>
            <img src={posterPath} alt="movie poster" />
          </Col>
          <Col md={9}>
            <h2>{props.movieTitle}</h2>
            <h4>Realese date - {props.releaseDate}</h4>
            <p>{props.overview}</p>
            <Button
              bsStyle="info"
              onClick={(movie) => props.onAdd(movie)}>
              + Add Movie
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }

  return (
    <h3>No Results</h3>
  );
};

AddMovie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  // movies: PropTypes.array.isRequired,
  addMovie: PropTypes.array.isRequired
};

export default AddMovie;
