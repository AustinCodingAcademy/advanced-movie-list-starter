import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

// Movie List app components:
// search, movie poster, selected movie screen,
// favorites, home page
// api key 63cc1471f10ab940a7de31d3ef1b14d9
// api read access token
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2NjMTQ3MWYxMGFiOTQwYTdkZTMxZDNlZjFiMTRkOSIsInN1YiI6IjU4OWQxNGNiYzNhMzY4NWY4YjAwMGFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ce1Bttr4z7FpNXCrctfTFoy7GaSBrjg5lJWx-K6XpNU
// example api request https://api.themoviedb.org/3/movie/550?api_key=63cc1471f10ab940a7de31d3ef1b14d9


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movie: [],
      returnedMovies: []
    };
  }


// SearchBar

  handleSearchBarChange(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    });
  }

// Axios Movie Search Request
  handleMovieSearch(event) {
    event.preventDefault();
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=63cc1471f10ab940a7de31d3ef1b14d9&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(resp => {
      this.setState({
        returnedMovies: resp.data.results
      });

    })
    .catch(err => console.error('Error! $(err)'));
  }

// Shows up to User
  render() {
    return (
      <div className="App">
        <h1>The My-terion Collection.</h1>
        <h3>You love it.</h3>
        <SearchBar
          name="searchBar"
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
          handleSubmit={this.handleMovieSearch.bind(this)}
        />
        <div className="MovieList">
          <MovieList
            returnedMovies={this.state.returnedMovies}
          />
        </div>
      </div>
    );
  }
}


export default App;
