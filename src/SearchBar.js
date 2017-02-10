import React from 'react';

const SearchBar = props => {
  return (
    <div className="row header">
      <div className="col-xs-12">
          <h1>Movie List</h1>
          <input
            type="text"
            onChange={(event) => props.onChange(event)}
            className="form-control searchBar" />
          <button onClick={(event) => props.submitClick(event)}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
