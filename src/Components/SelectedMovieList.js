import React, { PropTypes } from 'react';
import SelectedMovie from './SelectedMovie';
// import {

// } from 'react-bootstrap';

const SelectedMovieList = props => {
  return (
    <div>
      {props.selectedMovieList.map(selectedmovie => {
        return (
          <SelectedMovie
            key={selectedmovie.movieTitle}
            movieTitle={selectedmovie.movieTitle}
            overview={selectedmovie.overview}
            releasedate={selectedmovie.releasedate}
            posterPath={selectedmovie.posterPath}
          />
        );
      })}
    </div>
  );
};

SelectedMovieList.propTypes = {
  selectedMovieList: PropTypes.array.isRequired,

};

export default SelectedMovieList;
