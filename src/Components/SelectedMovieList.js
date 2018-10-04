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
          {props.selectedMovieList.map((selectedmovie) => {
            return (
              <SelectedMovie
                key={selectedmovie._id}
                original_title={selectedmovie.original_title}
                poster_path={selectedmovie.poster_path}
                movieTitle={selectedmovie.movieTitle}
                overview={selectedmovie.overview}
                releasedate={selectedmovie.releasedate}
                posterPath={selectedmovie.posterPath}
                release_date={selectedmovie.release_date}
                deleteMovie={() => props.onDeleteMovie(selectedmovie, selectedmovie._id)}
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
