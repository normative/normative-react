import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import styles from './scss/styles.scss'; // eslint-disable-line

ReactDOM.render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), document.getElementById('root'));
