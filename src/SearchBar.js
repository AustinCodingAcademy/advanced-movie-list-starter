import React from 'react';

const SearchBar = props => {
  return (
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <input
        type="text"
        onChange={(event) => props.onChange(event)}
        className="searchBar" />
      <button type="submit" id="searchSubmit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

export default SearchBar;
