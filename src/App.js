import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import './App.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends Component {
  constructor() {

    super();

    this.state = {
      searchText: '',
    };

  }

  handleSearchBarChange(){
    console.log("Searchbar changed");
  };

  render() {
    return (
        <MuiThemeProvider>
          <section className="container">
            <SearchBar
                className="search-bar"
                handleSearchBarChange={this.handleSearchBarChange}
            />
            <Divider className="divider"/>
            <MovieList
                className="movie-list"
                searchText={this.state.searchText}
            />
          </section>
        </MuiThemeProvider>
    );
  }
}

export default App;
