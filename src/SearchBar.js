import React, { PropTypes, Component} from 'react';
import {
  Well
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

  componentDidMount() {
    this.movieInput.focus();
  }
  render() {
    return (
      <div>
        <Well bsSize="small">
          <input
            className="search-bar"
            type="text"
            onChange={(event) => this.updateSearchText(event)}
            onSubmit={() => this.props.onButtonClick(this.state.searchText)}
            placeholder="search movies"
            ref={(input) => { this.movieInput = input; }}
          />
          <button onClick={() => this.props.onButtonClick(this.state.searchText)}>
            Search
          </button>
        </Well>
      </div>
    );
  }

}

SearchBar.propTypes = {
  onButtonClick: PropTypes.func,
  value: PropTypes.string
};

export default SearchBar;
