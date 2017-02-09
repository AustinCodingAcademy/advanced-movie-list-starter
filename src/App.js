import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import axios from 'axios';

import './App.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends Component {
  constructor() {

    super();

    this.priv = "001c9b0a8ef1338a07d482eceb601f9c";
    this.state = {
      searchText: '',
      queryResults: [],
      movies: []
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  componentDidMount(){
  }

  handleSearchBarChange(event){
    this.setState({
      searchText: event.target.value
    });

    this.searchOMDB();
  };

  handleFormSubmit(evt){
    evt.preventDefault();

    this.searchOMDB();
  }

  searchOMDB(){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.priv}&query=${this.state.searchText}`)
        .then((resp) => {
              this.setState({queryResults: resp.data.results});
              console.log(this.state.queryResults);
            }
        )
        .catch(err => console.log(err));
  }

  render() {
    return (
        <MuiThemeProvider>
          <section className="container">
            <SearchBar
                className="search-bar"
                handleSearchBarChange={this.handleSearchBarChange}
                handleSubmit={this.handleFormSubmit}
                value={this.state.searchText}
            />
            <Divider className="divider"/>
            <Divider className=""/>
            <MovieList
                className="movie-list"
                title="Search Results"
                movies={this.state.queryResults}
                searchText={this.state.searchText}
            />
          </section>
        </MuiThemeProvider>
    );
  }
}

export default App;
