import React from 'react';

const SearchBar = props => {
  return (
    <input
      className="Search-Bar"
      placeholder="Search for a movie..."
      aria-hidden="true"
      type="text"
      value={props.value}
      onChange={event => props.onChange(event)}
    />
  );
};


// ESLint React prop-type validation
SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SearchBar;
