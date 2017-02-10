/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 400,
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
        <h3>{props.movie.title}</h3>
        <FlatButton className="movie-card-button"
                    onClick={() => props.actionButton(props.movie)}
                    label={props.buttonText}
                    primary={true}/>
      </Paper>
  )
};

MovieCard.propTypes = {
  movie: React.PropTypes.object.isRequired,
  actionButton: React.PropTypes.func.isRequired,
  buttonText: React.PropTypes.string.isRequired
};

export default MovieCard;
