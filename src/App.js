import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import MovieDetail from './Components/MovieDetail';
import {Grid} from 'react-bootstrap';
import MovieList from './Components/MovieList';
// import MyMovieList from './Components/MyMovieList';
import './App.css';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      myMovies: [],
      savedMovies: [],
      movieDetails: {},
      overview: '',
      posterPath: '',
      releaseDate: '',
      title: '',

    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/movies')
    .then(resp => {
      this.setState({
        myMovies: resp.data
      });
    });

    // .catch(err => console.log(`Error! ${err}`));
  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  handleSearchSubmit() {
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8f7f8f8fcb0a3ba4d2dada3ff998720&language=en-US&query=${movie}&page=1&include_adult=false`)
  .then(resp => {
    const movieSearchResult = resp.data.results[0];
    if (movieSearchResult) {
      this.setState({
        movieDetails: {
          posterPath: 'https://image.tmdb.org/t/p/w154' + movieSearchResult.poster_path,
          title: movieSearchResult.title,
          releaseDate: movieSearchResult.release_date,
          overview: movieSearchResult.overview,
          display: true
        }
      });
    } else {
      this.setState({
        movieDetails: {
          noResultFound: true,
          display: true
        }
      });
    }
  });

  // .catch(err => console.log(`Error! ${err}`));
  }
  handleAddMovie(attributes) {
    console.log(attributes);
    axios.post('http://localhost:4000/movies', attributes)
      .then(resp => {
        this.setState({
          savedMovies: [...this.state.savedMovies, resp.data]
        });
      });
  }
  handleRemoveMovie(event, index) {
    axios.delete('http://localhost:4000/Movies/' + index)
      .then(() => {
        const newSavedMovies = this.state.savedMovies.filter(
        savedMovie => savedMovie._id !== index
      );

        this.setState({
          savedMovies: newSavedMovies
        });
      })
    .catch(err => console.log(err));
  }

  handleDismiss() {
    this.setState({
      searchText: '',
      movieDetails: {
        overview: '',
        posterPath: '',
        releaseDate: '',
        title: '',
        display: false,
        noResultFound: false
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <SearchBar
            value={this.state.searchText}
            onChange={this.handleSearchBarChange.bind(this)}
            onSubmit={this.handleSearchSubmit.bind(this)}
          />
          <MovieDetail
            movieDetails={this.state.movieDetails}
            onClickAddMovie={this.handleAddMovie.bind(this)}
            onClickDismiss={this.handleDismiss.bind(this)}
          />
          <MovieList
            savedMovies={this.state.savedMovies}
            onClickRemoveMovie={this.handleRemoveMovie.bind(this)}
          />
        </Grid>
      </div>
    );
  }
}


export default App;
