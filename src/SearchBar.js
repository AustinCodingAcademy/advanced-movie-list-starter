/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchBar = () => {
  return(
      <Paper className="search-paper">
        <TextField className="text-field"></TextField>
        <IconButton name="query">
          <SearchIcon/>
        </IconButton>

      </Paper>
  )

};

export default SearchBar;