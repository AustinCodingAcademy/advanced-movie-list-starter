import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <div className="row mainContainerRow">
      <div className="row resultMovieRow">
          <Movie
            movies={props.movies}
          />
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default MovieList;
