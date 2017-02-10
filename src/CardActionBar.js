/**
 * Created by brianmichael on 2/9/17.
 */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const CardActionBar = () => {
  return (
      <divider className="movie-card-action-bar">
        <FlatButton label="Primary" primary={true} />
      </divider>
  )
};

export default CardActionBar;