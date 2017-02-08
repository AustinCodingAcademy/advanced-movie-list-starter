import React from 'react';
import MoviePoster from './MoviePoster'

class NewMovie extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <div>
          <MoviePoster poster={props.poster}/>
          <h3>{props.title}</h3>
          <p>{props.overview}</p>
          <div>Add Movie</div>
          <a href="#" />Close</a>
        </div>
      </div>
    )
  }
}


export default NewMovie;
