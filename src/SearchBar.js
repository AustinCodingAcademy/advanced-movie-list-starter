import React from 'react';

const SearchBar = props => {
  return (
    <div>
      <input
        className="searchBarInput"
        type="text"
        placeholder="Search for movies..."
        onChange={event => props.onChange(event)}
      />
      <button
        className="searchBarButton"
        onSubmit={event => props.onSubmit(event)}>Search
      </button>
    </div>
  );
};


// ESLint React prop-type validation
SearchBar.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default SearchBar;
