import React, { Component } from 'react';
import SearchBarForm from './SearchBarForm';
import SearchedMovieView from './SearchedMovieView';
import MovieList from './MovieList';
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

  componentDidMount() {
    axios.get('http://localhost:4000/movies')
    .then(resp => {
      this.setState({
        movies: resp.data
      });
    })
    .catch(err => {
      console.log(`Error! ${err}`);
    });
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

  handleAddSearchedMovie() {
    axios.post('http://localhost:4000/movies/')
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          movies: [...this.state.movies, resp.data],
          searchedMovie: null
        });
      });
  }

//  renderAddMovie() {
  //  if (this.state.movies) {
  //    return (
  //      <MovieList
  //        posterPath={this.state.movies.poster_path}
  //        movieTitle={this.state.movies.title}
  //        movieOverview={this.state.movies.overview}
  //        onClick={this.handleAddSearchedMovie.bind(this)}
  //      />
  //    );
  //  }
  // }

  renderSearchedMovieView() {
    if (this.state.searchedMovie) {
      return (
        <SearchedMovieView
          posterPath={this.state.searchedMovie.poster_path}
          movieTitle={this.state.searchedMovie.title}
          movieOverview={this.state.searchedMovie.overview}
          onDelete={this.handleDeleteSearchedMovie.bind(this)}
          onClick={this.handleAddSearchedMovie.bind(this)}
        />
      );
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1>Movie List</h1>
        <SearchBarForm
          handleSearch={this.handleSearch.bind(this)}
          handleAddSearchedMovie={this.handleAddSearchedMovie.bind(this)}
        />
        <MovieList
          movies={this.state.movies}
          onSubmit={this.handleAddSearchedMovie.bind(this)}
        />
        {this.renderSearchedMovieView()}
      </div>
    );
  }
}

export default App;
