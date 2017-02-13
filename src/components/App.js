import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      savedMovies: [],
      movieDetails: {
        overview: '',
        posterPath: '',
        releaseDate: '',
        title: '',
        display: false,
        noResultFound: false
      }
    };
  }

  getMoviesFromDB() {
    axios.get('http://localhost:4000/savedMovies')
      .then(resp => {
        this.setState({
          savedMovies: resp.data
        });
        console.log(this.state.savedMovies);
      })
      .catch(err => {
        console.log(`Error! ${err}`);
        alert('Oh shoot! We ran into an error, sorry!');
      });
  }

  componentDidMount() {
    this.getMoviesFromDB();
  }

  handleSearchbarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSearchFormSubmit(event) {
    event.preventDefault();
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f7363928141e1fdb53dcac279b42409&language=en-US&query=${movie}&page=1&include_adult=false`)
      .then(resp => {
        console.log(resp.data);
        console.log(resp.data.results[0]);
        const searchResult = resp.data.results[0];

        if (searchResult) {
          this.setState({
            movieDetails: {
              posterPath: `https://image.tmdb.org/t/p/w154${searchResult.poster_path}`,
              title: searchResult.title,
              releaseDate: searchResult.release_date,
              overview: searchResult.overview,
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
        console.log(this.state.movieDetails);
      }
    );
  }

  handleAddMovie(event, attributes) {
    console.log(attributes);
    axios.post('http://localhost:4000/savedMovies', attributes)
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          savedMovies: [...this.state.savedMovies, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  handleRemoveMovie(event, index) {
    axios.delete(`http://localhost:4000/savedMovies/${index}`)
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
          <SearchForm
            value={this.state.searchText}
            onChange={this.handleSearchbarChange.bind(this)}
            onSubmit={this.handleSearchFormSubmit.bind(this)}
          />
          <MovieDetails
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
