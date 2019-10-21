import React, { Component, PropTypes } from 'react';
import {
Col,
Image,
Button,
} from 'react-bootstrap';

class SelectedMovie extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <Col sm={12} md={3} className="selected">
        <h4> {this.props.movieTitle}
          {this.props.original_title}</h4>
        <Image src={this.props.posterPath || `https://image.tmdb.org/t/p/w154` + this.props.poster_path} thumbnail />
        <h4> Release Date: {this.props.release_date}</h4>
        <h4> {this.props.plot} </h4>
        <Button
          onClick={() => this.props.deleteMovie()}
          bsStyle="danger" className="deletebutton">
         Delete
       </Button>
      </Col>
    );
  }
}

SelectedMovie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  releasedate: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired

};

export default SelectedMovie;
