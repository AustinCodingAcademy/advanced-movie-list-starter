import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      savedMovies: [],
      searchText: ''
    };
  }
  componentDidMount() {
    this.getSavedMovies();
    this.getPopularMovies();
  }
  getSavedMovies() {
    axios.get('/movies')
      .then(resp => {
        this.setState({
          savedMovies: resp.data
        });
      });
  }
  getPopularMovies() {
    const savedMoviesIdArr = this.state.savedMovies.map(savedMovie => savedMovie.id);
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=2dba200e2682e0f8903ed87b9c9e02d1')
      .then(resp => {
        // Only return popular movies whos IDs are NOT found in my savedMovies
        this.setState({
          movies: resp.data.results.filter(resultsMovie =>
            savedMoviesIdArr.indexOf(resultsMovie.id) === -1)
        });
      });
  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const savedMoviesIdArr = this.state.savedMovies.map(savedMovie => savedMovie.id);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US&query=${this.state.searchText}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          // Only return searched movies whos IDs are NOT found in my savedMovies
          movies: resp.data.results.filter(resultsMovie =>
            savedMoviesIdArr.indexOf(resultsMovie.id) === -1)
        });
      })
      .catch(err => {
        console.err(`Error ${err}`);
      });
  }
  handleImgError(event) {
    event.target.src = 'http://i.imgur.com/40NGAaC.png';
  }
  rocketFaveHandle(event, id) {
    event.preventDefault();
    const movieIdArr = (this.state.movies.map(movieItem => {
      return movieItem.id;
    }));
    const savedMovieIdArr = (this.state.savedMovies.map(savedMovie => {
      return savedMovie.id;
    }));
    if (savedMovieIdArr.indexOf(id) >= 0) {
      // This movie ID exists in my saved movies ID array, so DELETE it from my db
      axios.delete(`/movies/${this.state.savedMovies[movieIdArr.indexOf(id)]._id}`)
          .then(resp => {
            // Remove movie object from both states (from the page and savedMovies)
            const newMovies = this.state.movies.filter(movie => movie.id !==
              this.state.movies[movieIdArr.indexOf(id)].id);
            const newSavedMovies = this.state.savedMovies.filter(movie => movie.id !==
              (this.state.movies[movieIdArr.indexOf(id)].id));
            this.setState({
              movies: newMovies,
              savedMovies: newSavedMovies
            });
          });
    } else {
      // This movie ID is not in my saved movies ID array, so POST it to my db
      axios.post('/movies', (this.state.movies[movieIdArr.indexOf(id)]))
          .then(resp => {
            // Remove movie object from movie state (from the page) and
            // concat it to savedMovies state
            const newMovies = this.state.movies.filter(movie => movie.id !==
              this.state.movies[movieIdArr.indexOf(id)].id);
            this.setState({
              movies: newMovies,
              savedMovies: [...this.state.savedMovies, resp.data]
            });
          });
    }
  }
  showRocketFavs(event) {
    event.preventDefault();
    this.setState({
      movies: this.state.savedMovies
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar
          name="searchBar"
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
          getPopularMovies={this.getPopularMovies.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          showRocketFavs={this.showRocketFavs.bind(this)}
        />
        <MovieList
          movies={this.state.movies}
          savedMovies={this.state.savedMovies}
          onError={this.handleImgError.bind(this)}
          rocketFaveHandle={this.rocketFaveHandle.bind(this)}
         />
      </div>
    );
  }
}

export default Movies;
