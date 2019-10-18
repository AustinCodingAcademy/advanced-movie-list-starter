import React from 'react';

const SearchBar = props => {
  return (
    <div className="row col-xs-12 container">
      <h1 onClick={() => props.getPopularMovies()}>FAVS</h1>
      <br />
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <input
          type="text"
          onChange={(event) => props.onChange(event)}
          className="searchBar" />
        <button type="submit" id="searchSubmit">Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: React.propTypes.func.isRequired,
  getPopularMovies: React.propTypes.func.isRequired,
  handleSubmit: React.propTypes.func.isRequired,
};
