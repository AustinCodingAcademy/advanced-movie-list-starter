import React from 'react';

const MoviePoster = props => {
  return (
    <img className="poster-img" src={`https://image.tmdb.org/t/p/w154${props.posterPath}`} alt="PosterIMG" />
  );
};

export default MoviePoster;

MoviePoster.propTypes = {
  posterPath: React.PropTypes.string.isRequired
};
