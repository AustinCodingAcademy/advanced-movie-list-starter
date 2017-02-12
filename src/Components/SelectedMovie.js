import React, { Component, PropTypes } from 'react';
import {
Col,
Image,
Button,
Collapse,
Well
} from 'react-bootstrap';

class SelectedMovie extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <Col sm={12} md={3} className="selected">
        <h4> {this.props.movieTitle} </h4>
        <Image src={this.props.posterPath} thumbnail />
        <h4> release date- {this.props.releasedate} </h4>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
             Plot
       </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well className="well">
              {this.props.overview}
            </Well>
          </div>
        </Collapse>
      </Col>
    );
  }
}

SelectedMovie.propTypes = {
  releasedate: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired

};

export default SelectedMovie;
