import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ErrorContainer from './containers/ErrorContainer';
import HomeContainer from './containers/HomeContainer';

const routes = (
  <Route path="/">
    <IndexRoute component={HomeContainer} />
    <Route path="*" component={ErrorContainer} />
  </Route>
);

export default routes;
