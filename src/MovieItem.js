import React, { PropTypes} from 'react';
import {
  Col,
  Panel,
  Button,
  OverlayTrigger,
  Popover
} from 'react-bootstrap';
const MovieItem = props => {
  const popoverTop = (
    <Popover
      id="popover-positioned-scrolling-top"
      title={props.title}
      className="pop"
    >
      {props.desc}
    </Popover>
  );
  const path = props.poster;
  return (
    <Col xs={6} md={6}>
      <Panel bsStyle="info" header={props.title} className="movie_panel">
        <img
          src={`https://image.tmdb.org/t/p/w154${path}`}
          alt="movie"
          className="movie_poster"
        />
        <OverlayTrigger container={this} trigger="focus" placement="top" overlay={popoverTop}>
          <Button bsStyle="info" className="btn" >Description</Button>
        </OverlayTrigger>
        <Button onClick={props.onButtonClick} bsStyle="success" className="btn">Add Movie</Button>
      </Panel>
    </Col>
  );
};

MovieItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default MovieItem;
