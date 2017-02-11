import React from 'react';
import MoviePoster from './MoviePoster'

class NewMovie extends React.Component {
  constructor() {
    super();

  }

  addSelectedMovie () {
    const { title, poster_path, overview, release_date } = {
      title: this.props.title,
      poster_path: this.props.poster,
      overview: this.props.overview,
      release_date: this.props.releaseDate
    };
    console.log({title, poster_path, overview, release_date});
    this.props.addMovie({title, poster_path, overview, release_date});
  }

  render() {
    return (
        <div className="new-movie">
          <MoviePoster poster={this.props.poster}/>
          <div>
            <h3>{this.props.title}</h3>
            <h5>{this.props.releaseDate}</h5>
            <p>{this.props.overview}</p>
            <div id="add-movie" onClick={this.addSelectedMovie.bind(this)}><span>Add Movie</span></div>
            <a href="#" onClick={this.props.closeMovie.bind(this)}>Close</a>
          </div>
        </div>
    )
  }
}

NewMovie.propTypes = {
  title: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  overview: React.PropTypes.string.isRequired,
  addSelectedMovie: React.PropTypes.func,
  closeMovie: React.PropTypes.func.isRequired
};


export default NewMovie;
