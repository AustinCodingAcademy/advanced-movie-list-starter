import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      savedMovies: [],
      searchText: ''
    };
  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  handleSubmitClick(event) {
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US&query=${movie}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          movies: resp.data.results
        });
      });
  }
  render() {
    return (
      <div className="App container-fluid">
        <SearchBar
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
          submitClick={this.handleSubmitClick.bind(this)}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
