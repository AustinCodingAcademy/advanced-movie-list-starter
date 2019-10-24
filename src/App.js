import React, { Component } from 'react';
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="router">
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/MovieDetail/:id" component={MovieDetail} />
            <Route render={() => <h2>Not Found!</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
