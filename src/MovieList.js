import React from 'react';
import Movie from './Movie';

const MovieList = props => {

  return (
    <div className="MovieList">
      {props.movies.map(movies => {
        return (
          <Movie
            movies={movies}
            key={movies._id}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
