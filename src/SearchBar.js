/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontAwesome from 'react-fontawesome';

const SearchBar = () => {
  return(
      <Paper className="search-paper">
        <TextField className="text-field"></TextField>
        <FontAwesome name='search' />
      </Paper>
  )

};

export default SearchBar;