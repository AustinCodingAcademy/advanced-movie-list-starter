import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import MovieToAddList from './MovieToAddList';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      movies: [],
      moviesToAdd: []
    };
  }

  componentDidMount() {
    axios.get('http://www.localhost:4000/movies')
      .then(resp => {
        this.setState({
          movies: resp.data
        });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });
  }

  handleMoviesToAdd(attributes) {
    const newMoviesToAdd = this.state.moviesToAdd.filter(movie => movie.id !== attributes.id);
    axios.post('http://localhost:4000/movies', attributes)
      .then(resp => {
        this.setState({
          moviesToAdd: newMoviesToAdd,
          movies: [...this.state.movies, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  handleDeleteMovie(_id) {
    axios.delete(`http://localhost:4000/movies/${_id}`)
      .then(() => {
        const newMovies = this.state.movies.filter(movie => movie._id !== _id);
        this.setState({
          movies: newMovies
        });
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
          moviesToAdd: resp.data.results,
          searchText: ''
        });
      });
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
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <div>
                <h2>Search Results</h2>
                <MovieToAddList
                  addMovie={this.handleMoviesToAdd.bind(this)}
                  moviesToAdd={this.state.moviesToAdd}
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h2>Selected Movies</h2>
                <MovieList
                  deleteMovie={this.handleDeleteMovie.bind(this)}
                  movies={this.state.movies}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
