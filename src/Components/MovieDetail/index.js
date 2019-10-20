import React, {PropTypes} from 'react';
import {Row, Col, Button} from 'react-bootstrap';


const MovieDetail = props => {
  let searchResult;
  const attributes = {
    posterPath: props.movieDetails.posterPath,
    title: props.movieDetails.title,
    releaseDate: props.movieDetails.releaseDate,
    overview: props.movieDetails.overview
  };

  if (!props.movieDetails.noResultFound) {
    searchResult = (
      <Row className={
        props.movieDetails.display ? 'movie-details-visible' : 'movie-details-hidden'
      }>
        <Col>
          <section>
            <img src={props.movieDetails.posterPath} alt="movie poster" />
            <h3>{props.movieDetails.title}</h3>
            <h5>{props.movieDetails.releaseDate}</h5>
            <p>{props.movieDetails.overview}</p>
          </section>
          <Button
            onClick={event => props.onClickAddMovie(event, attributes)}
            type="button"
            name="add-movie"
            className="add-movie"
            bsStyle="primary"
          >
            Add Movie
          </Button>
          <Button
            onClick={event => props.onClickDismiss(event)}
            type="button"
            name="dismiss-results"
            className="dismiss-search"
            bsStyle="danger"
          >
            Dismiss
          </Button>
        </Col>
      </Row>
    );
  } else {
    searchResult = (
      <Row className={
        props.movieDetails.display ? 'movie-details-visible' : 'movie-details-hidden'
      }>
        <Col>
          <section>
            <p>No results found!</p>
            <Button
              onClick={event => props.onClickDismiss(event)}
              type="button"
              name="dismiss-message"
              className="dismiss-search"
              bsStyle="danger"
            >
              Dismiss
            </Button>
          </section>
        </Col>
      </Row>
    );
  }

  return searchResult;
};

MovieDetail.propTypes = {
  movieDetails: PropTypes.object,
  onClickAddMovie: PropTypes.func.isRequired,
  onClickDismiss: PropTypes.func.isRequired
};

export default MovieDetail;
