/**
 * Created by brianmichael on 2/6/17.
 */
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  if(props.movies.length > 0)
  return (
      <section className="movie-list">
        {props.movies.map((movie, index) => {
          return <MovieCard
              key={index}
              movie={movie}/>
        })}
      </section>
  );
  return (
      <section className="movie-list">
        <h3>No search results...</h3>
      </section>
  )
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
