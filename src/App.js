import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Components/Movie';
import SearchBar from './Components/SearchBar';
import {Button} from 'react-bootstrap';
const movie = 'jaws';
const API_KEY = `https://api.themoviedb.org/3/search/movie?api_key=ee03b33873ec8f42a973e3992deb8b2e&language=en-US&query=${movie}&page=1&include_adult=false`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      posterPath: '',
      movieTitle: '',
      overview: '',
      releasedate: '',
      moviename: `${movie}`,
      API: `https://api.themoviedb.org/3/search/movie?api_key=ee03b33873ec8f42a973e3992deb8b2e&language=en-US&query=${movie}&page=1&include_adult=false`,

      // posterPath: `${poster_path}`,
      // API: `https://api.themoviedb.org/3/search/movie?api_key=ee03b33873ec8f42a973e3992deb8b2e&language=en-US&query=${movie}&page=1&include_adult=false`,
      // movieSearch: `${movie}`
    };
  }

  componentDidMount() {
    axios.get(API_KEY)
    .then(resp => {
      this.setState({
        movies: resp.data.results[0],
        movieTitle: resp.data.results[0].original_title,
        posterPath: resp.data.results[0].poster_path,
        overview: resp.data.results[0].overview,
        releasedate: resp.data.results[0].release_date
      });
    });
  }

  handleSearchBarChange(e) {

    this.setState({
      value: e.target.value,
    });

    const newmovie = e.target.value;
    const API_NEW = `https://api.themoviedb.org/3/search/movie?api_key=ee03b33873ec8f42a973e3992deb8b2e&language=en-US&query=${newmovie}&page=1&include_adult=false`;

    axios.get(API_NEW)
    .then(resp => {
      this.setState({
        movies: resp.data.results[0],
        movieTitle: resp.data.results[0].original_title,
        posterPath: resp.data.results[0].poster_path,
        overview: resp.data.results[0].overview,
        releasedate: resp.data.results[0].release_date

      });
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <Movie
          movieTitle={this.state.movieTitle}
          overview={this.state.overview}
          releasedate={this.state.releasedate}
        />
        <SearchBar
          value={this.state.value} handleChange={this.handleSearchBarChange.bind(this)}
        />
        <Button>click</Button>
      </div>
    );
  }
}

export default App;
