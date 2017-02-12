import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import './App.css';
import Movie from './Components/Movie';
import SearchBar from './Components/SearchBar';
import SelectedMovieList from './Components/SelectedMovieList';
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
      posterimg: '',
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
    console.log(this.state.selectedMovieList)
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
        posterimg: `https://image.tmdb.org/t/p/w154` + resp.data.results[0].poster_path
      });
    });
  }
  handleAddMovie(title) {
    const newMoviesArray = [...this.state.selectedMovieList, title]
    this.setState({
      selectedMovieList: newMoviesArray
    });
  console.log(this.state.selectedMovieList)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <div className="App">
              <h1>Movie List</h1>

              <Movie
                movies={this.state.movies}
                movieTitle={this.state.movieTitle}
                overview={this.state.overview}
                releasedate={this.state.releasedate}
                posterPath={this.state.posterPath}
                addmovie={this.handleAddMovie.bind(this)}
              />
              <SearchBar
                value={this.state.value} handleChange={this.handleSearchBarChange.bind(this)}
              />

              <SelectedMovieList
                selectedMovieList={this.state.selectedMovieList}
             />

            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
