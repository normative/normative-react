import React, { Component } from 'react';
import './app.scss';

import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }

}
