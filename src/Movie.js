import React from 'react';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';

const Movie = props => {
    return (
      <div className="movie">
        <MoviePoster poster={props.poster} />
        <h4>{props.title}</h4>
        <MovieRating
          rating={props.rating}
          id={props.id}
          updateRating={props.updateRating} />
        <div className="remove-movie" onClick={() => props.handleDelete(props.id)}><span>Remove Movie</span></div>
      </div>
    )
}

Movie.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  handleDelete: React.PropTypes.func.isRequired
};


export default Movie;
