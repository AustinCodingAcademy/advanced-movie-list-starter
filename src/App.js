import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import uuid from 'uuid';

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
      favorites: []
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAddToFavoritesClick = this.handleAddToFavoritesClick.bind(this);
    this.handleRemoveFavoritesClick = this.handleRemoveFavoritesClick.bind(this);
    this.handleClearSearchResults = this.handleClearSearchResults.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    axios.get(`http://localhost:4000/movies/`)
        .then((resp)=>{
          this.setState({
            favorites: resp.data
          });
        })
        .catch(err => console.log(err))
  }

  handleClearSearchResults(){

    console.log("handle clear search results clicked");

    this.setState({
      queryResults: []
    })
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  };

  handleFormSubmit(evt) {
    evt.preventDefault();

    this.searchOMDB();
  }

  handleRemoveFavoritesClick(movie) {
    this.deleteFromFavorites(movie._id);
  }

  deleteFromFavorites(id) {
    axios.delete(`http://localhost:4000/movies/${id}`)
        .then(() => {
          this.setState({
            favorites: this.state.favorites.filter((movie) => {
              return movie._id !== id;
            })
          });
        }).catch(err => console.log(err));
  }

  handleAddToFavoritesClick(movie) {
    this.postToFavorites(movie);
  }

  postToFavorites(movie) {
    axios.post(`http://localhost:4000/movies/`, movie)
        .then((resp) => {
          this.setState({
            favorites: [...this.state.favorites, resp.data]
          })
        }).catch(err => console.log(err));
  }

  searchOMDB() {
    console.log("Searching OMDB");
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.priv}&query=${this.state.searchText}`)
        .then((resp) => {
              this.setState({queryResults: resp.data.results.slice(0, 5)});
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
                handleFormSubmit={this.handleFormSubmit}
                value={this.state.searchText}
                handleClearSearchResults={this.handleClearSearchResults}
            />
            <Divider className="divider"/>
            <h3>Search Results</h3>
            <MovieList
                className="movie-list"
                title="Search Results"
                movies={this.state.queryResults}
                searchText={this.state.searchText}
                actionButton={this.handleAddToFavoritesClick}
                buttonText="Add"
            />
            <Divider className="favorites-divider"/>
            <h3>Favorites</h3>
            <MovieList
                className="movie-list"
                title="Favorites"
                movies={this.state.favorites}
                searchText={this.state.searchText}
                actionButton={this.handleRemoveFavoritesClick}
                buttonText="Remove"
            />
          </section>
        </MuiThemeProvider>
    );
  }
}

export default App;
