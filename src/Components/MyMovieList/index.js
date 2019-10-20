import React from 'react';
import Movie from '../Movie';

const MyMovieList = props => {

  return (
    <div className="my-movie-list">
      <h3>My Favorites Movies</h3>
      { this.state.savedMovies === 'undefined' ? (
        <div>
          <p>You have no movies saved to your favorites list.  Search the database to add movies.</p>
        </div>
        ) : (
          <div>
            {props.savedMovies.map(movie => {
              return (
                <Movie {...movie}
                  key={movie.id}
                />
              );
            })

          }
          </div>
        )}
    </div>
  );
};

export default MyMovieList;

MyMovieList.propTypes = {
  savedMovies: React.PropTypes.array,
  id: React.PropTypes.number
};
