import React, {PropTypes} from 'react';
import {
  Image,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

const Movie = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={9} className="movie">
          <div>
            <h2> {props.movieTitle} </h2>
            <Image src={`https://image.tmdb.org/t/p/w154` + props.posterPath} thumbnail />
            <p> {props.overview}</p>
            <h4> release date- {props.releasedate} </h4>
          </div>
          <Button
            onClick={() => props.addmovie(props.movies)} className="addbutton"
            bsStyle="success">
            Add to list
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

Movie.propTypes = {
  movies: PropTypes.object.isRequired,
  movieTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  addmovie: PropTypes.func.isRequired
};

export default Movie;
