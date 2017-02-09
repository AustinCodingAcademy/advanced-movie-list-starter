import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: []
    };
  }


  // ---------Search Bar function--------- //

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }


  // ---------Axios Movie DB API Request function--------- //

  componentDidMount() {
    const movie = '';

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=40691d46fffaf653b832a5813be2e59f&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(resp => console.log(resp.data));
  }








  // ---------Renders to the DOM --------- //

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <div className="search-bar">
          <SearchBar
            value={this.state.searchText}
            onChange={this.handleSearchBarChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
