import React from 'react';

const SearchBar = props => {
  return (
    <section id="search">
      <form onSubmit={(e) => {e.preventDefault(); props.onClick();}}>
        <input
          className="search-bar"
          type="text"
          value={props.searchText}
          onChange={props.onChange}
        />

        <button onClick={() => {props.onClick();}}>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;


SearchBar.propTypes = {
  searchText: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};
