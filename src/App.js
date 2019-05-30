import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMovies: [],
      savedMovies: [],
      searchText: ''
    };
  }
  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  getSavedMovies(){
    axios.get('http://localhost:4000/movies')
      .then(resp => {
        this.setState({
          savedMovies: resp.data
        })
      })
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ab4bec4c09a675c9baa72dfe29d2ab6&language=en-US&query=${this.state.searchText}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          searchedMovies: resp.data.results
        });
      });
  }
  addMovie(event, movieName){
    let id;
    for (id = 0; id < this.state.searchedMovies.length; id++) {
      if (movieName === this.state.searchedMovies[id].title) {
        break;
      }
    }
    if (id < this.state.searchedMovies.length) {
      axios.post('http://localhost:4000/movies', (this.state.searchedMovies[id]))
        .then(resp => {
          this.getSavedMovies();
        });
    }
  }

  removeMovie(event, movieName){
    let id;
    for (id = 0; id < this.state.savedMovies.length; id++) {
      if (movieName === this.state.savedMovies[id].title) {
        break;
      }
    }
    if (id < this.state.savedMovies.length) {
      axios.post('http://localhost:4000/movies', (this.state.savedMovies[id]))
        .then(resp => {
          this.getSavedMovies();
        });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Search For A Movie</h1>
        <MovieList movies={this.state.searchedMovies}
          addable="true" add={this.addMovie.bind(this)}
          removable="false" remove=""
        />
        <br /><br />
        <SearchBar
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleSearchTextChange.bind(this)} />
        <br /> <br />
        <h1>Saved Movies</h1>
        <MovieList movies={this.state.savedMovies}
          addable="false" add=""
          removeable="true" remove={this.removeMovie.bind(this)}
        />
      </div>
    );
  }
}

export default App;
