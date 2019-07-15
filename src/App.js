import React, {Component} from 'react';
import Movies from './Movies';
import Profile from './Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {
  notFound() {
    return (
      <div className="col-xs-12 flexBoxCenterThis noMovies animated flipInY">
        <h1>404</h1>
        <p>{"Sorry, this page doesn't exist!"}</p>
        <div className="flexBoxCenterThis">
          <Link className="linkTo" to={'/'}>Get me outta here!</Link>
        </div>
      </div>
    );
  }
  render() {
    return (
      <BrowserRouter>
        <div className="router">
          <Switch>
            <Route exact path={'/'} component={Movies} />
            <Route exact path={'/profile/:id'} component={Profile} />
            <Route render={() => this.notFound()} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
