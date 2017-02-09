/**
 * Created by brianmichael on 2/9/17.
 */
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const CardActionBar = () => {
  return (
      <divider className="movie-card-action-bar">
        <FlatButton label="Primary" primary={true} />
      </divider>
  )
};

export default CardActionBar;