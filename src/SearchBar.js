/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchBar = (props) => {

  console.log(props);

  return(
      <Paper className="search-paper">
          <TextField className="text-field"
                     placeholder="Enter a search term..."
                     name="searchText"
                     onChange={(event) => props.handleSearchBarChange(event)}
                     value={props.value}>
          </TextField>
          <IconButton name="query">
            <SearchIcon/>
          </IconButton>
      </Paper>
  )

};

SearchBar.propTypes = {
  handleSearchBarChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
};

export default SearchBar;