import React, { Component, PropTypes } from 'react';
import {
  Row,
} from 'react-bootstrap';
import AddedMovie from './AddedMovie';

class AddedMovies extends Component {

  render() {
    return (
      <Row className="show-grid">
        {this.props.movies.map(movie => {
          return (
            <AddedMovie
              key={movie._id}
              title={movie.title}
              poster={movie.poster_path}
              desc={movie.overview}
              onButtonClick={() => this.props.RemoveMovie(movie._id)}
            />
          );
        })}
      </Row>
    );
  }
}

AddedMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  RemoveMovie: PropTypes.func
};
export default AddedMovies;
