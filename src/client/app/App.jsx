import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import ErrorContainer from '../containers/ErrorContainer';
import HomeContainer from '../containers/HomeContainer';

import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={ErrorContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
