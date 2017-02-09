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

    this.state = {
      searchText: '',
      queryResults: [],
      movies: []
    };

  }



  componentDidMount(){

    let priv = "001c9b0a8ef1338a07d482eceb601f9c";

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${priv}&query=Jack+Reacher`)
        .then((resp) => {
              this.setState({queryResults: resp.data.results});
              console.log(this.state.queryResults);
            }
        )
        .catch(err => console.log(err));
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
