import React from 'react';

const Movie = props => {
  function rocketFavText() {
    if (props.movies === props.savedMovies) {
      return ('Remove RocketFave');
    } else {
      return ('Add to RocketFaves')
    }
  }
  function checkLength() {
    if (props.movies.length) {
      return (
      props.movies.map((movieResult) => {
        return (
          <div
            key={movieResult.id}
            className="col-xs-12 col-sm-6 col-md-3 movieColumn animated slideInUp"
          >
            <div className="movieColumnContents">
              <div id="movieTitle">
                <h3>{movieResult.original_title}</h3>
              </div>
              <div id="posterContainer">
                <img
                  className="posterImg animated fadeIn"
                  onError={(event) => props.onError(event)}
                  alt={movieResult.title}
                  src={`https://image.tmdb.org/t/p/w154/${movieResult.poster_path}`}
                />
              </div>
              <div id="movieInfo">
                <p><strong>Overview:</strong></p>
                <p>{movieResult.overview}</p>
                <hr />
                <p><strong><u>Released:</u></strong> {movieResult.release_date}</p>
                <p><strong><u>Vote Average:</u></strong> {movieResult.vote_average}</p>
                <p><strong><u>Vote Count:</u></strong> {movieResult.vote_count}</p>
              </div>
              <div id="saveMovie">
                <button
                  className="fa fa-rocket"
                  aria-hidden="false"
                  onClick={(event) => props.rocketFaveHandle(event, movieResult.id)}
                />
                <a
                  id="hiddenSaveText"
                  href="#"
                  className="animated flipInX"
                  onClick={(event) => props.rocketFaveHandle(event, movieResult.id)}>
                  {rocketFavText()}
                </a>
              </div>
            </div>
          </div>
        );
      })
    )} else {
      return (
        <div className="col-xs-12 noMovies animated fadeIn">
          <h1>Uh oh!</h1>
          <p>No matches for that query <i className="fa fa-frown-o" aria-hidden="false"/></p>
        </div>
      );
    }
  }
  return (
    <div className="row columnsContainer">
      {checkLength()}
    </div>
  );
};
Movie.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default Movie;
