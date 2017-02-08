import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import './App.css';

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
  componentDidUpdate() {
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US&query=${movie}&page=1&include_adult=false`)
      .then(resp =>
        console.log(resp.data));
  }

  render() {
    return (
      <div className="App">
        <div className="row header">
          <div className="col-xs-12">
            <h1>Movie List</h1>
            <input
              type="text"
              onChange={this.handleSearchBarChange.bind(this)}
              className="form-control searchBar" />
            <button>Submit</button>
          </div>
        </div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
