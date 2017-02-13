import React, {PropTypes} from 'react';
import {
  Grid,
  Row
} from 'react-bootstrap';
import MovieListItem from './MovieListItem';

const MovieList = props => {
  return (
    <Grid>
      <Row className="show-grid">
        {props.movies.map(movie => {
          return (
            <MovieListItem
              key={movie._id}
              posterPath={movie.posterPath}
              movieTitle={movie.movieTitle}
              releaseDate={movie.releaseDate}
              deleteMovieClick={() => props.onDeleteMovie}
            />
          );
        })}
      </Row>
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
