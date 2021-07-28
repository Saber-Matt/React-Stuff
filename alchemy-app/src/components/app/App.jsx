import React from 'react';

export default function App() {
  return <h1>Hello World</h1>;
}


import { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={QuoteSearchPage}
            />
            <Route
              path="/quotes"
              exact={true}
              component={QuotePage}
            />
            <Route
              path="/quotes/:quoteId"
              component={QuoteDetailPage}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    )
  }
}