import React from 'react';

const SearchBar = props => {
  return (
    <section id="search">
      <input
        className="search-bar"
        type="text"
        value={props.searchText}
        onChange={props.onChange}
      />

      <button onClick={() => {props.onClick();}}>Search</button>
    </section>
  );
};

export default SearchBar;


SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};
