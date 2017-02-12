import React from 'react';
import MoviePoster from './MoviePoster';

const SearchResult = props => {
  return (
    <section className="search-result row">
      <div className="col-xs-4">

        <MoviePoster posterPath={props.posterPath} />

      </div>
      <div className="col-xs-8">
        <h3 className="searched-movie-title">
          {props.searchedMovieTitle}
        </h3>
        <p className="searched-movie-description">
          {props.searchedMovieOverview}
        </p>
        <br />
        <button onClick={() => {props.onAddToFavs(event);}}>
          Add
        </button>
        <button onClick={() => {props.onCloseSearchResult();}}>
          Close
        </button>
      </div>
    </section>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  posterPath: React.PropTypes.string.isRequired,
  searchedMovieTitle: React.PropTypes.string.isRequired,
  searchedMovieOverview: React.PropTypes.string.isRequired,
  onAddToFavs: React.PropTypes.func.isRequired,
  onCloseSearchResult: React.PropTypes.func.isRequired
};
