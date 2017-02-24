import React, { Component } from 'react';
import SearchArea from './SearchArea/index.js';
import MovieList from './MovieList/index.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      });
  }

  handleAddMovie(movie) {

    axios.post('/movies', movie)
      .then((response) => {
        console.log(response.data);
        const newList = [response.data].concat(this.state.movies);
        this.setState({
          movies: newList
        });
      })
      .catch(error => {
        console.log('Error! ' + error);
      });
  }

  handleRemoveMovie(id) {
    const newList = this.state.movies.filter(movie => {
      return movie._id !== id;
    });
    console.log(id);
    axios.delete(`/movies/${id}`)
      .then(() => {
        this.setState({
          movies: newList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <SearchArea onAdd={this.handleAddMovie.bind(this)} />
        <hr />
        <MovieList
          movies={this.state.movies}
          onRemove={this.handleRemoveMovie.bind(this)}
        />
      </div>
    );
  }
}

export default App;
