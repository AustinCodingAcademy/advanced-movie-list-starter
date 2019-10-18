import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      savedMovies: [],
      searchText: ''
    };
  }
  componentDidMount() {
    this.getSavedMovies();
    this.getPopularMovies();
  }

  getSavedMovies() {
    axios.get('http://localhost:4000/movies')
      .then(resp => {
        this.setState({
          savedMovies: resp.data
        });
      });
  }

  getPopularMovies() {
    const savedMoviesIdArr = this.state.savedMovies.map(savedMovie => savedMovie.id);
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=d201e76394e9037c13b6de4c6af94c49')
      .then(resp => {
        this.setState({
          movies: resp.data.results.filter(resultsMovie =>
            !savedMoviesIdArr[savedMoviesIdArr.indexOf(resultsMovie.id)])
        });
      });
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <searchBar
          name="searchBar"
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
      />
      </div>
    );
  }
}


export default App;
