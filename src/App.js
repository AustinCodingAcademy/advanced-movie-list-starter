import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import Favorites from './Favorites';
import SearchBar from './SearchBar';
// import MovieShowcase from './MovieShowcase';


// Movie List app components:
// search, movie poster, selected movie screen,
// favorites, home page
// api key 63cc1471f10ab940a7de31d3ef1b14d9
// api read access token
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2NjMTQ3MWYxMGFiOTQwYTdkZTMxZDNlZjFiMTRkOSIsInN1YiI6IjU4OWQxNGNiYzNhMzY4NWY4YjAwMGFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ce1Bttr4z7FpNXCrctfTFoy7GaSBrjg5lJWx-K6XpNU
// example api request https://api.themoviedb.org/3/movie/550?api_key=63cc1471f10ab940a7de31d3ef1b14d9


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      returnedMovies: [],
      favorites: []
    };
  }


  //
  componentDidMount() {
    axios.get('http://localhost:4000/movies')
        .then(resp => {
          this.setState({
            favorites: resp.data,
          });
        })
        .catch(err => console.log(err));

  }



  // Adding a Favorite!
  handleAddFavorite(favorite) {
    axios.post('http://localhost:4000/movies', {title: favorite.title, poster: favorite.poster})
    .then((resp) => {
      this.setState({
        favorites: [...this.state.favorites, resp.data]
      });
    })
    .catch(err => console.log(err));
  }


  // Deleting a Favorite. We all make mistakes.
  handleDeleteFavorite(_id) {
    axios.delete(`http://localhost:4000/movies/${_id}`)
    .then(() => {
      this.setState();
    });
  }


// SearchBar

  handleSearchBarChange(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    });
  }



// Axios Movie Search Request
  handleMovieSearch(event) {
    event.preventDefault();
    const movie = this.state.searchText;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=63cc1471f10ab940a7de31d3ef1b14d9&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(resp => {
      this.setState({
        returnedMovies: resp.data.results
      });

    })
    .catch(() => console.error('Error! $(err)'));
  }



// Shows up to User
  render() {
    return (
      <div className="App">
        <Favorites
          key={this.state.id}
          favorites={this.state.favorites}
          onClick={this.handleDeleteFavorite.bind(this)}
         />
        <SearchBar
          name="searchBar"
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
          handleSubmit={this.handleMovieSearch.bind(this)}
        />
        <MovieList
          returnedMovies={this.state.returnedMovies}
          onAddFavorite={this.handleAddFavorite.bind(this)}
        />
      </div>
    );
  }
}


export default App;
