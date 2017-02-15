import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event)} className="searchBar">
        <input type="text" onChange={(event) => this.props.handleChange(event)} />
        <button type="submit" id="searchSubmit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
