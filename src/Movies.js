import React, { Component } from 'react';
import SearchBarForm from './SearchBarForm';
import SearchedMovieView from './SearchedMovieView';
import MovieList from './MovieList';
import axios from 'axios';
import './App.css';

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchedMovie: null
    };
  }

  componentDidMount() {
    axios.get('/movies')
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

  handleAddSearchedMovie(attributes = {
    title: this.state.searchedMovie.title,
    posterPath: this.state.searchedMovie.poster_path,
    overview: this.state.searchedMovie.overview,
    releaseDate: this.state.searchedMovie.release_date}) {

    axios.post('/movies', attributes)
      .then(resp => {
        this.setState({
          movies: [...this.state.movies, resp.data ],
          searchedMovie: null
        });
      })
      .catch(err => console.log(err));
  }

  renderSearchedMovieView() {
    if (this.state.searchedMovie) {
      return (
        <SearchedMovieView
          posterPath={this.state.searchedMovie.poster_path}
          movieTitle={this.state.searchedMovie.title}
          movieOverview={this.state.searchedMovie.overview}
          releaseDate={this.state.searchedMovie.release_date}
          onDelete={this.handleDeleteSearchedMovie.bind(this)}
          onClick={this.handleAddSearchedMovie.bind(this)}
        />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Search For a Movie</h1>
        <SearchBarForm
          handleSearch={this.handleSearch.bind(this)}
          handleAddSearchedMovie={this.handleAddSearchedMovie.bind(this)}
        />
        {this.renderSearchedMovieView()}
        <h1>My Movie List</h1>
        <MovieList
          key={this.state._id}
          movies={this.state.movies}
          title={this.state.title}
          posterPath={this.state.poster_path}
          overview={this.state.overview}
          releaseDate={this.state.release_date}
          addSearchedMovie={this.handleAddSearchedMovie.bind(this)}
        />
      </div>
    );
  }
}

export default Movies;
