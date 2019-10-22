import React, {PropTypes} from 'react';
import {
  Col,
  Button,
  Popover,
  OverlayTrigger
} from 'react-bootstrap';
import './MovieListItem.css';


const MovieListItem = props => {
  const popoverOverview = (
    <Popover id="modal-popover" title={props.title}>
      {props.overview}
    </Popover>
  );

  return (
    <Col md={6}>
      <div className="movie-list-item">
        <img src={`https://image.tmdb.org/t/p/w154${props.poster_path}`} alt="movie poster" />
        <h4>{props.title}</h4>
        <h5>Realese date - {props.release_date}</h5>
        <p><OverlayTrigger overlay={popoverOverview}><a href="#">Description</a></OverlayTrigger></p>
        <Button
          bsStyle="danger"
          onClick={props.onDeleteMovieClick}>
          Remove
        </Button>
      </div>
    </Col>
  );
};

MovieListItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired
};

export default MovieListItem;
