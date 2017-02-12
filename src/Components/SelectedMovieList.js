import React, { PropTypes } from 'react';
import SelectedMovie from './SelectedMovie';
import {
Grid,
Row,
Col,
} from 'react-bootstrap';

const SelectedMovieList = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12} className="list">
          {props.selectedMovieList.map((selectedmovie, index) => {
            return (
              <SelectedMovie
                key={index}
                movieTitle={selectedmovie.movieTitle}
                overview={selectedmovie.overview}
                releasedate={selectedmovie.releasedate}
                posterPath={selectedmovie.posterPath}
              />
            );
          })}
        </Col>
      </Row>
    </Grid>
  );
};

SelectedMovieList.propTypes = {
  selectedMovieList: PropTypes.array.isRequired,
};

export default SelectedMovieList;
