import React from 'react';


const SearchedMovieView = props => {
  return (
    <section id="searched-movie-view">
      <img src={`https://image.tmdb.org/t/p/w154/${props.posterPath}`} alt="posterpath" />
      <div className="movieTitle">
        <h3>{props.movieTitle}</h3>
      </div>
      <div className="movieOverview">
        <p>{props.movieOverview}</p>
      </div>
      <button className="add-button" onClick={() => props.onClick(props.movies)}>
        Add Movie to List
      </button>
      <button className="dismiss-button" onClick={() => props.onDelete(props.searchedMovie)}>
        Dismiss
      </button>
    </section>
  );
};

SearchedMovieView.propTypes = {
  movieTitle: React.PropTypes.string.isRequired,
  posterPath: React.PropTypes.string.isRequired,
  movieOverview: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default SearchedMovieView;
