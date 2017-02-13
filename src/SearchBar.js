import React, { PropTypes, Component} from 'react';
import {

} from 'react-bootstrap';


class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  updateSearchText(event) {
    const text = event.target.value;
    this.setState({
      searchText: text
    });
  }
  render() {
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          onChange={(event) => this.updateSearchText(event)}
        />
        <button onClick={() => this.props.onButtonClick(this.state.searchText)}>
          Search
        </button>
      </div>
    );
  }

}

SearchBar.propTypes = {
  onButtonClick: PropTypes.func,
  value: PropTypes.string
};

export default SearchBar;
