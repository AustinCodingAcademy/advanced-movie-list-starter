/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton'

const SearchBar = (props) => {

  return (
      <section>
        <Paper className="search-paper">
          <form onSubmit={(event) => props.handleFormSubmit(event)} name="query">
            <TextField className="text-field"
                       placeholder="Enter a search term"
                       name="searchText"
                       onChange={(event) => props.handleSearchBarChange(event)}
                       value={props.value}>
            </TextField>
            <IconButton className="search-bar-search-button" type="submit">
              <SearchIcon/>
            </IconButton>
          </form>
        </Paper>
        <FlatButton onClick={() => props.handleClearSearchResults()}
                    className="search-bar-clear-results"
                    primary={true}>
          Clear Search Results
        </FlatButton>
      </section>


  )

};

SearchBar.propTypes = {
  handleSearchBarChange: React.PropTypes.func.isRequired,
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleClearSearchResults: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
};

export default SearchBar;