import React, { PropTypes } from 'react';
import {
Grid,
Row,
Col,
Image
} from 'react-bootstrap';

const SelectedMovie = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <div>
            <h2> {props.movieTitle} </h2>
            <Image src={`https://image.tmdb.org/t/p/w154` + props.posterPath} thumbnail />
            <p> {props.overview}</p>
            <h4> release date- {props.releasedate} </h4>
          </div>
        </Col>
      </Row>
    </Grid>

  );

};

SelectedMovie.propTypes = {
  releasedate: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired

};

export default SelectedMovie;
