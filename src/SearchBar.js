import React from 'react';

const SearchBar = props => {
  return (
    // onSubmit event is added to the form so that the user
    // can press enter to submit the form
    <form
      onSubmit={(event) => props.onSubmit(event)}>
      <input
        className="searchBarInput"
        type="text"
        placeholder="Search for movies..."
        onChange={(event) => props.onChange(event)}
      />
      <button
        className="searchBarButton"
        type="submit">Search
      </button>
    </form>
  );
};


// ESLint React prop-type validation
SearchBar.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default SearchBar;
