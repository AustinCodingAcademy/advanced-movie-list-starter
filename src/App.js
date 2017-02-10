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
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=2dba200e2682e0f8903ed87b9c9e02d1')
      .then(resp => {
        this.setState({
          movies: resp.data.results
        });
      });
    axios.get('http://localhost:4000/movies')
      .then(resp => {
        this.setState({
          savedMovies: resp.data
        });
      });
  }
  componentDidUpdate() {

  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US&query=${movie}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          movies: resp.data.results
        });
      })
      .catch(err => {
        console.err(`Error ${err}`);
      });
  }
  imgErrorHandle(event) {
    event.target.src = 'http://i.imgur.com/SUynOc5.png';
  }
  rocketFaveHandle(event, id) {
    event.preventDefault();
    const movieArr = (this.state.movies.map(movieItem => {
      return movieItem.id;
    }));
    if (this.state.movies !== this.state.savedMovies) {
      axios.post('http://localhost:4000/movies', (this.state.movies[movieArr.indexOf(id)]))
        .then(resp => {
          this.setState({
            savedMovies: [...this.state.savedMovies, resp.data]
          });
        });
    } else {
      axios.delete(`http://localhost:4000/movies/${this.state.movies[movieArr.indexOf(id)]._id}`)
        .then(resp => {
          const newMovies = this.state.movies.filter(movie => movie.id !== (this.state.movies[movieArr.indexOf(id)].id));
          this.setState({
            movies: newMovies,
            savedMovies: newMovies
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
          handleSubmit={this.handleSubmit.bind(this)}
          showRocketFavs={this.showRocketFavs.bind(this)}
        />
        <MovieList
          movies={this.state.movies}
          savedMovies={this.state.savedMovies}
          onError={this.imgErrorHandle.bind(this)}
          rocketFaveHandle={this.rocketFaveHandle.bind(this)}
         />
      </div>
    );
  }
}

export default App;
