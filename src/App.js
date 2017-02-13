import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddedMovies from './AddedMovies';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  PageHeader
} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: [],
      addedMovies: []
    };
  }

  // addMovies() {
  //   const searchMovie = 'jaws';
  //   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fde54a01d27516539d182393c4aab6d5&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
  //     .then(
  //       resp => this.update(resp.data.results)
  //     );
  // }

  showAdded() {
    axios.get('http://localhost:4000/addedMovies')
      .then(
        resp => this.updateAdded(resp.data.results)
      );
  }

  updateAdded(data) {
    this.setState({
      addedMovies: data
    });
  }

  update(data) {
    this.setState({
      movies: data,
    });
  }

  componentDidMount() {
    // this.addMovies();
    this.showAdded();
    axios.get('http://localhost:4000/addedMovies')
      .then(resp => {
        this.setState({
          searchText: this.state.searchText,
          addedMovies: resp.data
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  // handleAddMovie(attributes) {
  //   axios.post('http://localhost:4000/movies', attributes)
  //     .then(resp => {
  //       this.setState({
  //         movies: [...this.state.movies, resp.data]
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  handleAddMovie(attributes) {
    const newMovies = this.state.movies.filter(movie => movie.id !== attributes.id);
    axios.post('http://localhost:4000/addedMovies', attributes)
      .then(resp => {
        this.setState({
          movies: newMovies,
          addedMovies: [...this.state.addedMovies, resp.data]
        });
      });
  }

  handleRemoveMovie(id) {
    console.log(id);
    axios.delete(`http://localhost:4000/addedMovies/${id}`)
      .then(resp => {
        const newMovies = this.state.addedMovies.filter(movie => movie._id !== id);
        this.setState({
          addedMovies: newMovies
        });
      })
      .catch(err => console.log(`ERROR! ${err}`));
  }

  handleSearchBarChange(text) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fde54a01d27516539d182393c4aab6d5&language=en-US&query=${text}&page=1&include_adult=false`)
      .then(
        resp => this.update(resp.data.results, text)
      );
  }

  render() {
    return (
      <div className="container main">
        <Jumbotron className="header">
          Welcome
        </Jumbotron>
        <SearchBar
          onButtonClick={this.handleSearchBarChange.bind(this)}
        />
        <Grid>
          <Row>
            <Col md={6} mdPush={6}>
              <PageHeader><small>Added Movies</small></PageHeader>
              <Row>
                <AddedMovies
                  movies={this.state.addedMovies}
                  RemoveMovie={this.handleRemoveMovie.bind(this)}
                />
              </Row>
            </Col>
            <Col md={6} mdPull={6}>
              <PageHeader><small>Search Results</small></PageHeader>
              <MovieList
                movies={this.state.movies}
                AddMovie={this.handleAddMovie.bind(this)}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default App;
