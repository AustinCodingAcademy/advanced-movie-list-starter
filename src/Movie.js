import React from 'react';

const Movie = props => {
  return (
    <div className="row columnsContainer">
      {props.movies.map((movieResult, index) => {
        return (
          <div key={index} className="col-xs-3 movieColumn">
            <div className="movieColumnContents">
              <div id="movieTitle">
                <h3>{movieResult.title}</h3>
              </div>
              <div id="posterContainer">
                <img
                  alt={movieResult.title}
                  src={`https://image.tmdb.org/t/p/w154/${movieResult.poster_path}`}
                />
              </div>
              <div id="movieInfo">
                <p>{movieResult.overview}</p>
                <hr />
                <p>Released: {movieResult.release_date}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Movie;
