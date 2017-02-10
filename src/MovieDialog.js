/**
 * Created by brianmichael on 2/10/17.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class MovieDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    console.log("open clicked");
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
          label="Close"
          primary={true}
          onTouchTap={this.handleClose}
          onClick={this.handleClose}
      />
    ];

    return (
        <div>
          <FlatButton className="movie-card-button"
                      onClick={this.handleOpen}
                      label="Details"
                      primary={false}/>
          <Dialog
              actions={actions}
              modal={true}
              contentStyle={customContentStyle}
              open={this.state.open}
              autoScrollBodyContent={true}
          >
            <section className="movie-dialog">
              <img className="dialog-img" src={this.props.posterUrl}/>
              <h2>{this.props.movie.title}</h2>
              <h3>Released: {this.props.movie.release_date}</h3>
              <p>{this.props.movie.overview}</p>
            </section>

          </Dialog>
        </div>
    );
  }
}

MovieDialog.propTypes = {
  movie: React.PropTypes.object.isRequired
};