import React, {
  Component
} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import Favorites from './Favorites';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResult: null,
      movieTitleSearched: '',
      favoriteMovies: []
    };
  }

  componentDidMount() {
    // debugger;
    axios.get('http://localhost:4000/movies')
      .then(resp => {
        this.setState({
          favoriteMovies: resp.data
        });
      })
      .catch(err => console.log(err));
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
    this.setState({
      movieTitleSearched: event.target.value
    });
  }

  handleCloseSearchResult() {
    this.setState({
      searchResult: null,
      movieTitleSearched: ''
    });
  }

  handleAddToFavorites(attributes) {
    attributes = {
      title: this.state.searchResult.title,
      posterPath: this.state.searchResult.poster_path,
      overview: this.state.searchResult.overview
    };
    axios.post('http://localhost:4000/movies', attributes)
      .then(resp => {
        this.setState({
          favoriteMovies: [...this.state.favoriteMovies, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  handleRemoveFavorite(_id) {
    console.log(_id);
    axios.delete(`http://localhost:4000/movies/${_id}`)
      .then(() => {
        const newFavs = this.state.favoriteMovies.filter(movie => movie._id !== _id);

        this.setState({
          favoriteMovies: newFavs
        });
      })
      .catch(err => console.log(`Error, bish! ${err}`));
  }

  //   R E N D E R

  renderSearchResult() {
    if (this.state.searchResult) {
      return (
        <div className="search-result">
          <h1>Search Result</h1>
          <SearchResult
            posterPath={this.state.searchResult.poster_path}
            searchedMovieTitle={this.state.searchResult.title}
            searchedMovieOverview={this.state.searchResult.overview}
            onAddToFavs={this.handleAddToFavorites.bind(this)}
            onCloseSearchResult={this.handleCloseSearchResult.bind(this)}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Movie List </h1>

        <SearchBar
          searchText={this.state.movieTitleSearched}
          onChange={this.handleSearchTextChange.bind(this)}
          onClick={this.handleSearchMovie.bind(this)}
        />

        {this.renderSearchResult()}
        <hr />
        <Favorites
          favoriteMovies={this.state.favoriteMovies}
          onClickRemove={this.handleRemoveFavorite.bind(this)}
        />


      </div>
    );
  }
}

export default App;
