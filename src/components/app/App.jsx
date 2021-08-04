import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ArnoldDetail from '../hey-arnold/ArnoldDetail.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={ArnoldDetail}
            />
            <Route
              path="/details"
              exact={true}
              component={ArnoldDetail}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}
