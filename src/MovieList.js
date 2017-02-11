import React from 'react';
import Movie from './Movie';

const MovieList = props => {
    return (
      <div id="movie-list">
        {props.movies.map(movie => {
          return (
            <Movie
              key={movie._id}
              id={movie._id}
              title={movie.title}
              poster={movie.poster_path}
              handleDelete={props.handleDelete}
            />
          )}
        )}
      </div>
    )
}

MovieList.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  poster: React.PropTypes.string,
  handleDelete: React.PropTypes.func.isRequired
};

export default MovieList;
