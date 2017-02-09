import React from 'react';

const Movie = props => {
  return (
    <li className="movie-detail">
      <div className="poster">
        <img src={props.poster} alt="poster" />
      </div>
      <div className="movieInfo">
        <h2>{props.title}</h2>
        {props.overview}
      </div>
      <button
        // className="xButton"
        // button to close movie detail, not delete
        onClick={() => props.onCloseMovie(props.id)}
        // ** may need to change id to poster_path, which will be the id
        className="fa fa-times"
        aria-hidden="true"
      />
      <button
        // className="addMovieButton"
        // button to add movie to list of selected movies
        onClick={() => props.onAddMovie(props.id)}
        // ** may need to change id to poster_path, which will be the id
        className="fa fa-times"
        aria-hidden="true"
      />
    </li>
  );
};


// ESLint React prop-type validation
Movie.propTypes = {
  id: React.PropTypes.number.isReqiuired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isReqiuired,
  overview: React.PropTypes.string.isReqiuired,
  onCloseMovie: React.PropTypes.func.isReqiuired,
  onAddMovie: React.PropTypes.func.isReqiuired
};

export default Movie;
