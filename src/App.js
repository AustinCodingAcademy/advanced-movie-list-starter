import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Components/Movie';
import SearchBar from './Components/SearchBar';
import {Button} from 'react-bootstrap';
import LeftContainer from './Components/LeftContainer';
import Navagationbar from './Components/Navagationbar';
import Body from './Components/Body';


const movie = 'jaws';
const API_KEY = `https://api.themoviedb.org/3/search/movie?api_key=ee03b33873ec8f42a973e3992deb8b2e&language=en-US&query=${movie}&page=1&include_adult=false`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Hello, World!',
      headerParagraph: 'This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.',
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

        <Navagationbar />

        <LeftContainer
          header={this.state.header}
          headerParagraph={this.state.headerParagraph}

        />
        <Body />
        <h1>Movie List</h1>


        <SearchBar
          value={this.state.value} handleChange={this.handleSearchBarChange.bind(this)}
        />
        <Button>click</Button>
        <Movie
          movieTitle={this.state.movieTitle}
          overview={this.state.overview}
          releasedate={this.state.releasedate}
        />


      </div>
    );
  }
}

export default App;
