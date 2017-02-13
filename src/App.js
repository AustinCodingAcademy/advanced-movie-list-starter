import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      movies: [],
      posterPath: '',
      movieTitle: '',
      overview: '',
      releaseDate: '',
      addMovie: []
    };
  }

  componentDidMount() {
    axios.get('http://www.localhost:4000/movies')
      .then(resp => {
        this.setState({
          movies: resp.data.results[0]
        });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const movie = this.state.searchText;
    const API = `https://api.themoviedb.org/3/search/movie?api_key=3ae9f51b472d34e24547d110850fb48e&language=en-US&query=${movie}&page=1&include_adult=false`;

    axios.get(API)
      .then(resp => {
        this.setState({
          searchText: '',
          addMovie: [...this.state.addMovie, resp.data.results[0]],
          movieTitle: resp.data.results[0].original_title,
          posterPath: resp.data.results[0].poster_path,
          overview: resp.data.results[0].overview,
          releaseDate: resp.data.results[0].release_date
        });
      });
  }

  handleAddMovie(movie) {
    axios.post('http://localhost:4000/movies', movie)
      .then(resp => {
        this.setState({
          movies: [
            ...this.state.movies,
            resp.data.results[0]
          ]
        });
        console.log(this.state.movies);
      })
      .catch(err => console.log(err));
  }

  handleDeleteMovie() {

  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <SearchBar
          value={this.state.searchText}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
        <div>
          <h2>Search Results</h2>
          <AddMovie
            movies={this.state.movies}
            movieTitle={this.state.movieTitle}
            posterPath={this.state.posterPath}
            overview={this.state.overview}
            releaseDate={this.state.releaseDate}
            onAdd={this.handleAddMovie.bind(this)}
            addMovie={this.state.addMovie}
          />
        </div>
        <div>
          <h2>Selected Movies</h2>
          <MovieList
            movies={this.state.movies}
            posterPath={this.state.posterPath}
            movieTitle={this.state.movieTitle}
            releaseDate={this.state.releaseDate}
            onDeleteMovie={this.handleDeleteMovie.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
