import React, { Component } from 'react';
import MoviePoster from './MoviePoster';

class SearchResult extends Component {

  render() {
    return (
      <section className="search-result row">
        <div className="col-xs-4">

          <MoviePoster posterPath={this.props.posterPath} />

        </div>
        <div className="col-xs-8">
          <h3 className="searched-movie-title">
            {this.props.searchedMovieTitle}
          </h3>
          <p className="searched-movie-description">
            {this.props.searchedMovieOverview}
          </p>
          <br />
          <button onClick={this.props.onAddToFavs}>
            Add
          </button>
          <button onClick={() => {this.props.onCloseSearchResult();}}>
            Close
          </button>
        </div>
      </section>
    );
  };
  }


export default SearchResult;

SearchResult.propTypes = {
  posterPath: React.PropTypes.string.isRequired,
  searchedMovieTitle: React.PropTypes.string.isRequired,
  searchedMovieOverview: React.PropTypes.string.isRequired,
  onAddToFavs: React.PropTypes.func.isRequired,
  onCloseSearchResult: React.PropTypes.func.isRequired
};
