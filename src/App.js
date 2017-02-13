import React, {Component} from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchText: 'Jaws',
            searchResultMovie: {},
            savedMovies: [],
            showSearch:false
        };
    }

    componentDidMount() {
        this.getSavedMovies();
    }
    getSavedMovies(){
        axios.get('http://localhost:4000/movies')
            .then(resp => {
                this.setState({savedMovies: resp.data})
            })
            .catch(err => console.log(`Error! ${err}`));
    }

    handleSearchBarChange(event) {
        this.setState({
            searchText: event.target.value
        });

    }

    handleSearchBarClick(event) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a55e287b4ebcbe89d9089b0d024c8e5e&language=en-US&query=${this.state.searchText}&page=1&include_adult=false`)
            .then(resp => this.handleDDbResponse(resp));
    }

    handleDDbResponse(resp) {
        this.setState({
            searchResultMovie: resp.data.results[0],showSearch:true
        });
    }

    showSearch() {
        return this.state.showSearch;
    }

    getResultMovie() {
        return this.state.searchResultMovie;
    }

    handleAddMovieClick(event) {
        console.log('movie added');

        axios.post('http://localhost:4000/movies', this.state.searchResultMovie)
            .then(resp => {
                this.handleSearchCancel();
                this.getSavedMovies();
            })
            .catch(err => console.log(err));


    }

    handleSearchCancel(event) {
        console.log('search canceled');
        this.setState({searchResultMovie: {},showSearch:false});

    }

    handleRemoveMovieClickEvent(movieID) {
            axios.delete(`http://localhost:4000/movies/${movieID}`).then(resp => {
                this.getSavedMovies();
            }).catch(err => console.log(err));
    }



    render() {
        var self = this;

        const divStyle = {
            margin: '5px'
        };

        return (
            <div className="App"  style={divStyle}>
                <h1>Movie List</h1>
                <Search
                    searchText={this.state.searchText}
                    onChange={this.handleSearchBarChange.bind(this)}
                    onClick={this.handleSearchBarClick.bind(this)}
                />
                <SearchResult
                        movie={this.getResultMovie()} visible={this.showSearch()}
                        onAdd={this.handleAddMovieClick.bind(this)}
                        onCancelSearch={this.handleSearchCancel.bind(this)}
                />


                <div className="row" style={divStyle}>
                    {
                        this.state.savedMovies.map((movie, i) => {
                            return <div key={i} className="col-xs-6 col-md-2 text-center">
                                <div className="row">
                                    <div className="col-xs-12"><img alt="" src={'//image.tmdb.org/t/p/w154' + movie.poster_path}/></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12"><span>{movie.original_title}</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <button className="btn btn-danger" style={divStyle}
                                                onClick={ event => self.handleRemoveMovieClickEvent(movie._id)}>Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}


export default App;
