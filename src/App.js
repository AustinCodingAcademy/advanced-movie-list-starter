import React, { Component } from 'react';
import MovieProfile from './MovieProfile';
import Movies from './Movies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='router'>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route exact path='/profile/:id' component={MovieProfile} />
            <Route render={() => <h2>OOPS! That movie sucks too bad!</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
