import React, { Component } from 'react';
import Search from './containers/Search/';
import Detail from './containers/Detail/';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h1 className='pageTitle'>Movie Finder</h1>
          <Route exact path='/' component={ Search } />
          <Route path='/movie/:id' component={ Detail } />
        </div>
      </Router>
    );
  }
}
