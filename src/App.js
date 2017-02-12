import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: []
    };
  }


// ---------Search Bar function--------- //

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }


// ---------Axios Movie DB API Request function--------- //

  handleSearchForMovie(event) {
    const movie = this.state.searchText;

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=40691d46fffaf653b832a5813be2e59f&language=en-US&query=${movie}&page=1&include_adult=false`)
    // GET request to retreive movies from database
    .then(resp => {
      // Then callback is passed for a successful request
      this.setState({
        movies: resp.data.results[0]
        // Data is the JSON response
      });
    })
    .catch(err => console.error(`Error! ${err}`));
    // Catch callback is passed for the bad/errored request
  }






// ---------Renders to the DOM --------- //

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <div className="search-bar">
          <SearchBar
            value={this.state.searchText}
            onChange={this.handleSearchBarChange.bind(this)}
            onSubmit={this.handleSearchForMovie.bind(this)}
          />
        </div>
        <div className="movie-list">
          <MovieList
            movies={this.state.movies}
          />
        </div>
      </div>
    );
  }
}

export default App;
