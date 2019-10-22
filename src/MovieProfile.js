import React from 'react';
import MoviePoster from './MoviePoster';

const MovieProfile = props => {
  return (
    <section id="movie-profile">
      <MoviePoster posterIMG={props.posterIMG} />

      <div>Title</div>
      <div>Summary</div>

      <button>Add</button>
    </section>
  )
}
