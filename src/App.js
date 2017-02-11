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
  componentDidMount() {
    this.getPopularMovies();
    this.getSavedMovies();
  }
  getSavedMovies() {
    axios.get('http://localhost:4000/movies')
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
        const filteredMovies = resp.data.results.filter(resultsMovie => !savedMoviesIdArr[savedMoviesIdArr.indexOf(resultsMovie.id)]);
        this.setState({
          movies: filteredMovies
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
    const searchText = this.state.searchText;
    const savedMoviesIdArr = this.state.savedMovies.map(savedMovie => savedMovie.id);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(resp => {
        const filteredMovies = resp.data.results.filter(resultsMovie => !savedMoviesIdArr[savedMoviesIdArr.indexOf(resultsMovie.id)]);
        this.setState({
          movies: filteredMovies
        });
      })
      .catch(err => {
        console.err(`Error ${err}`);
      });
  }
  handleImgError(event) {
    event.target.src = 'http://i.imgur.com/SUynOc5.png';
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
      // This movie id exists in my saved movies id array, so delete it from my db.json
      axios.delete(`http://localhost:4000/movies/${this.state.savedMovies[movieIdArr.indexOf(id)]._id}`)
          .then(resp => {
            const newMovies = this.state.movies.filter(movie => movie.id !== this.state.movies[movieIdArr.indexOf(id)].id);
            const newSavedMovies = this.state.savedMovies.filter(movie => movie.id !== (this.state.movies[movieIdArr.indexOf(id)].id));
            this.setState({
              movies: newMovies,
              savedMovies: newSavedMovies
            });
          });
    } else {
      // This movie id is not in my saved movies id array, so post it to my db.josn
        axios.post('http://localhost:4000/movies', (this.state.movies[movieIdArr.indexOf(id)]))
          .then(resp => {
            const newMovies = this.state.movies.filter(movie => movie.id !== this.state.movies[movieIdArr.indexOf(id)].id);
            this.setState({
              movies: newMovies,
              savedMovies: [...this.state.savedMovies, resp.data]
            });
          });
    }
  }
  showRocketFavs() {
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

export default App;
