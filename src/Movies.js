import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import FavMovieList from './FavMovieList';
import axios from 'axios';
import './App.css';


class Movies extends Component {
  constructor() {
    super();

    this.apiKey = '40691d46fffaf653b832a5813be2e59f';
    this.state = {
      searchText: '',
      movies: [],
      returnedMovies: [],
      addMovie: {},
      selectedFavMovies: []
    };
  }


// ---------Search Bar function--------- //

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }


// ---------Axios Movie DB API & localhost Get Request functions--------- //

  componentDidMount() {
    axios.get('http://localhost:4000/movies')
      .then(resp => {
        this.setState({
          movies: resp.data
        });
      })
      /* eslint no-console: 0*/
      .catch(err => console.log(`Error! ${err}`));
  }

  handleSearchForMovie(event) {
    event.preventDefault();

    const movie = this.state.searchText;

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${movie}&page=1&include_adult=false`)
      // GET request to retreive movies from database
      .then(resp => {
        // Then callback is passed for a successful request
        this.setState({
          returnedMovies: resp.data.results
        // Data is the JSON response
        });
      })
      .catch(err => console.error(`Error! ${err}`));
      // Catch callback is passed for the bad/errored request
  }


// ---------Axios HTTP Post/Delete (add/delete) functions --------- //

  handleAddMovie(id) {
    const savedMoviesArray = (this.state.returnedMovies.map(movie => {
      return movie.id;
    }));

    // Adds movie to favorites list
    axios.post('http://localhost:4000/movies', this.state.returnedMovies(savedMoviesArray.indexOf(id)))
      .then(resp => {
        this.setState({
          selectedFavMovies: [...this.state.selectedFavMovies, resp.data],
          addMovie: {},
          searchText: ''
        });
      })
      .catch(err => console.error(err));
  }

  handleRemoveMovie(id) {
    // Deletes movie from movie list
    axios.delete(`http://localhost:4000/movies/${id}`)
      .then(() => {
        const newRemovedMovies = this.state.movies.filter(movie => movie.id !== id);

        this.setState({
          selectedFavMovies: newRemovedMovies
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }


// ---------Renders to the DOM --------- //

  render() {
    return (
      <div className="row App">

        <div className="title-search col-lg-12">
          <h1>Movie List</h1>
          <div className="search-bar">
            <SearchBar
              value={this.state.searchText}
              onChange={this.handleSearchBarChange.bind(this)}
              onSubmit={this.handleSearchForMovie.bind(this)}
            />
          </div>
        </div>

        <div className="row">
          <div className="movie-applist col-lg-12">
            <MovieList
              returnedMovies={this.state.returnedMovies}
              onAddMovie={this.handleAddMovie.bind(this)}
            />
          </div>
        </div>

        <div className="row">
          <h2>Favorite Movies</h2>
          <FavMovieList
            selectedFavMovies={this.state.selectedFavMovies}
            onRemoveMovie={this.handleRemoveMovie.bind(this)}
          />
        </div>

      </div>
    );
  }
}

export default Movies;
