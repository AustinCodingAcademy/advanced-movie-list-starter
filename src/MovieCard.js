/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import CardActionBar from './CardActionBar';

const style = {
  height: 330,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  position: 'relative'
};

const MovieCard = (props) => {

  function buildPosterUrl(){
    return `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
  }

  return (

      <Paper style={style} zDepth={1}>
        <img className="movie-card-poster" src={buildPosterUrl()}/>
        <CardActionBar/>
      </Paper>
  )
};

MovieCard.propTypes = {
  movie: React.PropTypes.object.isRequired
};

export default MovieCard;
