import React from 'react';

class MoviePoster extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <img src={props.poster}/>
      </div>
    )
  }
}

export default MoviePoster;
