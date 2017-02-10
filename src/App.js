import React, { Component } from 'react';
import SearchBarForm from './SearchBarForm';
import SearchedMovieView from './SearchedMovieView';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchedMovie: null
    };
  }


  handleSearch(title) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3c2fa8d02720d7241a74710927eb9576&language=en-US&query=${title}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          searchedMovie: resp.data.results[0]
        });
      });
  }

  handleDeleteSearchedMovie() {
    this.setState({
      searchedMovie: null
    });

  }

  renderSearchedMovieView() {
    if (this.state.searchedMovie) {
      return (
        <SearchedMovieView
          posterPath={this.state.searchedMovie.poster_path}
          movieTitle={this.state.searchedMovie.title}
          movieOverview={this.state.searchedMovie.overview}
          onDelete={this.handleDeleteSearchedMovie.bind(this)}
        />
      );
    }
  }


  render() {
    return (
      <div className="App container-fluid">
        <h1>Movie List</h1>
        <SearchBarForm
          value={this.state.title}
        //  movies={this.title}
          handleSearch={this.handleSearch.bind(this)}
          onSubmit={this.handleSearchMovie}

        />
        {this.renderSearchedMovieView()}
      </div>
    );
  }
}

export default App;
