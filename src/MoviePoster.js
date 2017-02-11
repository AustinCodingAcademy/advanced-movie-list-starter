import React from 'react';

const MoviePoster = props => {
    return (
      <div id="movie-poster">
        <img src={props.poster}/>
      </div>
    )
}

MoviePoster.propTypes = {
  poster: React.PropTypes.string.isRequired
}

export default MoviePoster;
