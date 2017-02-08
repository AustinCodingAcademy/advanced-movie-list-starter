import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component{
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <div>
          <Movie />
        </div>

      </div>
    )
  }

}

export default MovieList;
