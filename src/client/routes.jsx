import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app/App';
import ErrorContainer from './containers/ErrorContainer';
import HomeContainer from './containers/HomeContainer';


const routes = (
  <Route component={App} path="/">
    <IndexRoute component={HomeContainer} />
    <Route path="*" component={ErrorContainer} />
  </Route>
);

export default routes;
