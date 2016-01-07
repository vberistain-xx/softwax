import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import Shop from './Shop';
import Admin from './Admin';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

let routes = (  
  <Route path="/" component={ Root }>
    <IndexRoute component={ Shop } />
    <Route path="admin" component={ Admin } />
  </Route>
);

export default () => {
  return (
    <Router routes={routes}  history={createHistory()}/>
  );
}
