import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ErrorContainer from './js/containers/ErrorContainer';
import HomeContainer from './js/containers/HomeContainer';

const routes = (
  <Route path="/">
    <IndexRoute component={HomeContainer} />
    <Route path="*" component={ErrorContainer} />
  </Route>
);

export default routes;
