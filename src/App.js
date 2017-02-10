import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import axios from 'axios';

// Material UI needs this
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
import './App.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends Component {
  constructor() {

    super();

    //Never store stuff like this in a github repo, unless it's for a class and it's not tied to your cc! :)
    this.priv = "001c9b0a8ef1338a07d482eceb601f9c";
    this.state = {
      searchText: '',
      queryResults: [],
      favorites: [],
      maxQueryResults: 6
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAddToFavoritesClick = this.handleAddToFavoritesClick.bind(this);
    this.handleRemoveFavoritesClick = this.handleRemoveFavoritesClick.bind(this);
    this.handleClearSearchResults = this.handleClearSearchResults.bind(this);
    this.handleLimitResultChange = this.handleLimitResultChange.bind(this);
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
    this.setState({
      queryResults: []
    })
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  };

  handleLimitResultChange(event){
    this.setState({
      maxQueryResults: parseInt(event.target.value, 10)
    })
  }

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
    console.log(movie);
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
              this.setState({queryResults: resp.data.results.slice(0, this.state.maxQueryResults)});
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
                handleLimitResultChange={this.handleLimitResultChange}
                maxQueryResults={this.state.maxQueryResults}
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
