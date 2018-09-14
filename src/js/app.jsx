import React, { Component } from 'react';
import SearchContainer from './containers/Search/SearchContainer';
import DetailContainer from './containers/Detail/DetailContainer';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ SearchContainer } />
          <Route exact path='/movie/:id' component={ DetailContainer } />
        </div>
      </Router>
    );
  }
}
