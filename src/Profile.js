import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Profile extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US`)
      .then(resp => {
        this.setState({
          movie: resp.data
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }
  getallGenres() {
    this.state.movie.genres.forEach(genre => {
      return genre.name;
    });
  }
  renderProfile() {
    return (
      <div className="row" id="profileRow">
        <div className="header row animated fadeIn" id="profileHeader">
          <div className="col-xs-12">
            <h1><Link className="linkTo" to={'/'}>RocketShippDB</Link></h1>
            <i
              className="fa fa-rocket"
              aria-hidden="false"
            />
          </div>
        </div>
        <div className="profileContents animated fadeIn">
          <div className="col-xs-12 col-md-4 profileColumn" id="leftProfileColumn">
            <div className="profilePosterContainer flexBoxCenterThis">
              <img alt="Poster" src={`https://image.tmdb.org/t/p/w154/${this.state.movie.poster_path}`} />
            </div>
            <div className="profileDetails flexBoxCenterThis">
              <p>{this.state.movie.release_date}</p>
              <p>{this.state.movie.runtime} minutes</p>
              <p>{this.state.movie.genres[0].name}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-8 profileColumn" id="rightProfileColumn">
            <div className="profileTagline">
              <h3>{this.state.movie.tagline}</h3>
            </div>
            <div className="profileOverviewContainer flexBoxCenterThis">
              <div className="profileOverview">
                <div className="profileMovieTitle">
                  <h3>{this.state.movie.original_title}</h3>
                </div>
                <hr />
                <p>{this.state.movie.overview}</p>
                <hr />
                <div className="homePageLink">
                  <a href={this.state.movie.homepage} target="_blank">Go to site <i className="fa fa-share-square" aria-hidden="true"/></a>
                </div>
              </div>
            </div>
            <div className="profileStats">
              <p><span>Vote Average:</span> {this.state.movie.vote_average}</p>
              <p><span>Vote Count:</span> {this.state.movie.vote_count}</p>
              <p><span>Budget:</span> ${this.state.movie.budget}</p>
              <p><span>Revenue:</span> ${this.state.movie.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (!this.state.movie) {
      return (
        <div className="col-xs-12 flexBoxCenterThis noMovies animated flipInY">
          <h1>(*-*)</h1>
          <p>{'Looking for that movie...'}</p>
          <div className="flexBoxCenterThis"><Link className="linkTo" to={'/'}>Get me outta here!</Link></div>
        </div>
      );
    }
    return this.renderProfile();
  }
}

export default Profile;
