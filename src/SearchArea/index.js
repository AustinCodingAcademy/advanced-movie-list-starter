import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar/index.js';
import SearchResult from './SearchResult/index.js';
import axios from 'axios';

class SearchArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      searchResult: {},
      result: false
    };
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSearchBarSubmit(event) {
    event.preventDefault();

    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6cd73ec4677bc1d7b6560505cf4f453&language=en-US&query=${movie}&page=1&include_adult=false`)
      .then(response => {
        if (response.data.results.length > 0) {
          const {
            title,
            overview,
            release_date: releaseDate
          } = response.data.results[0];

          const posterPath = 'https://image.tmdb.org/t/p/w154' + response.data.results[0].poster_path;

          this.setState({
            searchResult: {
              title,
              posterPath,
              overview,
              releaseDate
            },
            result: true
          });
        } else {
          this.setState({
            searchResult: {
              title: 'No Results',
              overview: 'No results were found for your search. Please try again.',
              posterPath: ''
            },
            result: true
          });
        }
      });
  }

  handleResultClose() {
    this.setState({
      searchResult: {},
      result: false
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
          onSubmit={this.handleSearchBarSubmit.bind(this)}
        />
        {this.state.result &&
          <SearchResult
            searchResult={this.state.searchResult}
            onClose={this.handleResultClose.bind(this)}
            onAdd={this.props.onAdd}
          />
        }

      </div>
    );
  }
}

SearchArea.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default SearchArea;
