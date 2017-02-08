import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input placeholder="Search by title..."</input>
        <div onClick={props.handleSearch(this.input.value)}></div>
      </div>
    )
  }
}

export default SearchBar;
