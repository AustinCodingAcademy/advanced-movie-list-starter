import React from 'react';

const MovieList = props => {
  return (
    <div className="row mainContainerRow">
      <div className="row firstMovieRow">
      </div>
      <div className="row secondMovieRow">
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default MovieList;
