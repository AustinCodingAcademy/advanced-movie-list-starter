import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MultiResult from './MultiResult';
import NewMovie from './NewMovie';
import MovieList from './MovieList'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      movies: [],
      searchResult: [],
      newMovie: {},
      showResults: true
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
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
      const RESULT = resp.data.results.map(resultMovie => {
        return (
          {
            id: resultMovie.id,
            title: resultMovie.title,
            poster_path: 'https://image.tmdb.org/t/p/w154' + resultMovie.poster_path,
            overview: resultMovie.overview,
            release_date: this.formatDate(resultMovie.release_date)
          }
        )
      });
      this.setState({
        searchResult: RESULT,
        showResults: true
      });
      console.log(this.state.searchResult);
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

  handleNewMovie(_id) {
    let showMovie = this.state.searchResult.filter(movie => movie.id === _id);
    console.log("_id is " + _id)
    console.log("newMovie = " + showMovie[0]);
    this.setState({
      newMovie: showMovie[0],
      showResults: false
    });
  }

  handleMovieListAdd(movie) {
    axios.post('http://localhost:4000/movies', movie)
      .then(resp => {
        this.setState({
          movies: [...this.state.movies, resp.data],
          newMovie: {},
          searchText: ""
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

  updateRating(_id, rating) {
    let updatedMovie = this.state.movies.filter(movie => movie._id === _id);
    updatedMovie[0].rating = rating;
    console.log(_id);
    console.log(rating);
    console.log(updatedMovie);

    this.handleUpdateMovie(_id, updatedMovie[0]);
  }

  handleUpdateMovie(_id, newAttributes) {
    axios.put(`http://localhost:4000/movies/${_id}`, newAttributes)
      .then(resp => {
        this.loadMovies();
      })
      .catch(err => {
        console.log(`Error! ${err}`);
      })
  }

  closeNewMovie(event) {
    event.preventDefault();

    this.setState({
      newMovie: {}
    });
  }

  formatDate(date) {
    let arrDate = date.split('-');
    return arrDate[1] + '/' + arrDate[2] + '/' + arrDate[0];
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <SearchBar
          handleSearch={this.handleSearch.bind(this)}
          value={this.state.searchText}
          onChange={this.handleSearchChange.bind(this)}/>
        {this.state.searchResult.length > 0 && this.state.showResults ? <MultiResult
          searchResult={this.state.searchResult}
          handleMovie={this.handleNewMovie.bind(this)}/> : null}
        {this.state.newMovie.title !== undefined ? <NewMovie
          title={this.state.newMovie.title}
          poster={this.state.newMovie.poster_path}
          overview={this.state.newMovie.overview}
          releaseDate={this.state.newMovie.release_date}
          addMovie={this.handleMovieListAdd.bind(this)}
          closeMovie={this.closeNewMovie.bind(this)}
          /> : null}
        {this.state.movies.length > 0 ? <MovieList
            movies={this.state.movies}
            updateRating={this.updateRating.bind(this)}
            handleDelete={this.handleDeleteMovie.bind(this)}
          /> : null}
      </div>
    );
  }
}

export default App;
