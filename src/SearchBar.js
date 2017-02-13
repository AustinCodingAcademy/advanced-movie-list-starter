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
        onClick={event => props.onClick(event)}>Search
      </button>
    </div>
  );
};


// ESLint React prop-type validation
SearchBar.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default SearchBar;
