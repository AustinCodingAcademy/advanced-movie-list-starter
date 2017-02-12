import React, { Component, PropTypes } from 'react';
import {
  Row,
} from 'react-bootstrap';
import MovieItem from './MovieItem';

class MovieList extends Component {

  render() {
    return (
      <Row className="show-grid">
        {this.props.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              desc={movie.overview}
              onButtonClick={() => this.props.AddMovie(movie)}
            />
          );
        })}
      </Row>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  AddMovie: PropTypes.func
};
export default MovieList;
