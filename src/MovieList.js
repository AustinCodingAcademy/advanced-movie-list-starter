import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    let val = <div className="MovieList">No movies here!</div>;
    if (this.props.movies.length) {
      const movies = this.props.movies.map((movie) =>
      <td id={movie.title}>
        <Movie title={movie.title} poster_path={movie.poster_path}
          addable={this.props.addable} add={this.props.add}
          removeable={this.props.removeable} remove={this.props.remove} />
      </td>);
      val = <div className="MovieList" width={this.props.movies.length * 200}>
        <table>
          <tr>
            {movies}
          </tr>
        </table>
      </div>;
    }
    return val;
  }
}

export default MovieList;
