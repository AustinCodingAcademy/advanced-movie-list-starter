import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NewMovie from './NewMovie';
import MovieList from './MovieList'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      movies: [],
      searchResult: {},
      showNewMovie: false
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
      console.log(`Error! ${err}`)
    })
  }

  handleSearch(search) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f092d5754221ae7340670fea92139433&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(resp => {
      const RESULT = {title: resp.data.results[0].title, poster_path: "https://image.tmdb.org/t/p/w154" + resp.data.results[0].poster_path, overview: resp.data.results[0].overview, release_date: resp.data.results[0].release_date};
      console.log(RESULT);
      this.setState({
        searchResult: RESULT,
        showNewMovie: true
      });
    })
    .catch(err => {
        console.log(`Error! ${err}`)
    });
  }

  handleSearchChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleMovieListAdd(movie) {
    axios.post('http://localhost:4000/movies', movie)
      .then(resp => {
        this.setState({
          movies: [...this.state.movies, resp.data],
          showNewMovie: false
        });
      })
      .catch(err => {
        console.log(`Error ! ${err}`);
      })
  }

  handleDeleteMovie(_id) {
    axios.delete(`http://localhost:4000/movies/${_id}`)
      .then(() => {
        const NEWMOVIES = this.state.movies.filter(movie => movie._id !== _id);

        this.setState({
          movies: NEWMOVIES
        });
      })
      .catch(err => {
        console.log(`Error! ${err}`);
      })
  }

  closeNewMovie(event) {
    event.preventDefault();

    this.setState({
      showNewMovie: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <SearchBar
          handleSearch={this.handleSearch.bind(this)}
          value={this.state.searchText}
          onChange={this.handleSearchChange.bind(this)}/>
        {this.state.showNewMovie ? <NewMovie
          title={this.state.searchResult.title}
          poster={this.state.searchResult.poster_path}
          overview={this.state.searchResult.overview}
          releaseDate={this.state.searchResult.release_date}
          addMovie={this.handleMovieListAdd.bind(this)}
          closeMovie={this.closeNewMovie.bind(this)}
          /> : null}
        {this.state.movies.length > 0 ? <MovieList
            movies={this.state.movies}
            handleDelete={this.handleDeleteMovie.bind(this)}
          /> : null}
      </div>
    );
  }
}

export default App;
