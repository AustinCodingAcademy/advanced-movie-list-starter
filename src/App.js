import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      movies: [],
      searchResult: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/movies')
    .then(resp => {
      this.setState({
        movies: resp.data
      })
    })
    .catch(err => {
      console.log(`Error! ${err}`)
    })
  }

  handleSearch(search) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f092d5754221ae7340670fea92139433&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(resp => {
      this.setState({
        searchResult: {resp.data[0].title, resp.data[0].poster_path, resp.data[0].overview, resp.data[0].release_date}
      })
    })
    .catch(err => {
        console.log(`Error! ${err}`)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <SearchBar handleSearch={this.handleSearch}/>
        <NewMovie
          title={this.state.searchResult.title}
          poster={this.state.searchResult.poster_path}
          overview={this.state.searchResult.overview}
          releaseDate={this.state.searchResult.release_date}
          />
        <MovieList />
      </div>
    );
  }
}

export default App;
