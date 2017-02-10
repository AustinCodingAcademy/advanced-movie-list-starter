import React, {
  Component
} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResult: {},
      movieTitleSearched: '',
      searchedMoviePoster: ''
    };
  }

  handleSearchMovie() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f7f9fedeceabe6b49874f3ccfa06f84e&language=en-US&query=${this.state.movieTitleSearched}&page=1&include_adult=false`)
      .then(resp => {
        this.setState({
          searchResult: resp.data.results[0],

        });
      });
  }

  handleSearchTextChange(event) {
    // console.log(event.target.value)
    this.setState({
      movieTitleSearched: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1 > Movie List </h1>

        <SearchBar
          searchText={this.state.movieTitleSearched}
          onChange={this.handleSearchTextChange.bind(this)}
          onClick={this.handleSearchMovie.bind(this)}
        /></div>
    );
  }
}

export default App;
