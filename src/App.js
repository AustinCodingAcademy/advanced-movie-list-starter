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
    axios.get('http://localhost:4000/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      });
  }

  handleAddMovie(movie) {
    console.log(movie);
    const newList = [movie].concat(this.state.movies);

    axios.post('http://localhost:4000/movies', movie)
      .then(() => {
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
    axios.delete(`http://localhost:4000/movies/${id}`)
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
