/**
 * Created by brianmichael on 2/6/17.
 */
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  if (props.movies.length > 0) {
    return (
      <section className="movie-list">
        {props.movies.map((movie, index) => {
          return <MovieCard
            key={index}
            movie={movie}
            actionButton={props.actionButton}
            buttonText={props.buttonText}
          />;
        })}
      </section>
    );
  }
  return (
    <section className="movie-list">
      <h5>No results...</h5>
    </section>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired,
  actionButton: React.PropTypes.func.isRequired
};

export default MovieList;
