import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Movie';
import SearchBar from './SearchBar';
import SelectedMovieList from './SelectedMovieList';
const movie = 'batman';
const API_KEY = `https://api.themoviedb.org/3/search/movie?api_key=2abf3c2d61ecf1da10ac37c71eb548a8&language=en-US&query=${movie}&page=1&include_adult=false`;

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
      API: `https://api.themoviedb.org/3/search/movie?api_key=2abf3c2d61ecf1da10ac37c71eb548a8language=en-US&query=${movie}&page=1&include_adult=false`,
      selectedMovieList: []
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

    axios.get('http://localhost:4000/movies')
  .then(resp => {
    this.setState({
      selectedMovieList: resp.data
    });
    console.log(this.state.selectedMovieList);
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
        releasedate: resp.data.results[0].release_date,
        posterimg: `https://image.tmdb.org/t/p/w154` + resp.data.results[0].poster_path,
      });
    });
  }


  handleAddMovieNew(movie) {
    axios.post(`http://localhost:4000/movies`, movie)
    .then(resp => {
      this.setState({
        selectedMovieList: [...this.state.selectedMovieList, resp.data]
      });
      console.log(this.state.selectedMovieList);
    })
    .catch(err => console.log(err));
  }

  handleDeleteMovie(selectedmovie, id) {
    axios.delete(`http://localhost:4000/movies/${id}`)
    .then(() => {
      this.setState({
        selectedMovieList: this.state.selectedMovieList.filter(selectedmovie => {
          return selectedmovie._id !== id;
        })
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Movie List </h1>
        <SearchBar
          className="searchbar"
          value={this.state.value} handleChange={this.handleSearchBarChange.bind(this)}
        />
        <Movie
          movies={this.state.movies}
          movieTitle={this.state.movieTitle}
          overview={this.state.overview}
          releasedate={this.state.releasedate}
          release_date={this.state.release_date}
          posterPath={this.state.posterPath}
          addmovie={this.handleAddMovieNew.bind(this)}
        />
        <SelectedMovieList
          onDeleteMovie={this.handleDeleteMovie.bind(this)}
          selectedMovieList={this.state.selectedMovieList}
       />
      </div>
    );
  }
}

export default App;
