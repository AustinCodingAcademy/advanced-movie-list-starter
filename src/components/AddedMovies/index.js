import React, { Component, PropTypes } from 'react';
import {
  Row,
  Well
} from 'react-bootstrap';
import AddedMovie from '../AddedMovie';

class AddedMovies extends Component {

  render() {
    return (
      <Well>
        <Row className="show-grid">
          {this.props.movies.map(movie => {
            const path = (
              typeof movie.poster_path !== 'string' ? movie.posterpath : movie.poster_path
            ); 
            return (
              <AddedMovie
                key={movie._id}
                title={movie.title}
                poster={path}
                desc={movie.overview}
                onButtonClick={() => this.props.RemoveMovie(movie._id)}
              />
            );
          })}
        </Row>
      </Well>
    );
  }
}

AddedMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  RemoveMovie: PropTypes.func
};
export default AddedMovies;
