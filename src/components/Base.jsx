import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoutesContainer from '../modules/routes/containers/RoutesContainer';
import RouteViewContainer from '../modules/routes/containers/RouteViewContainer';
import RouteAddContainer from '../modules/routes/containers/RouteAddContainer';

const Base = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/routes" component={RoutesContainer} />
      <Route exact path="/routes/view/:routeID" component={RouteViewContainer} />
      <Route exact path="/routes/add" component={RouteAddContainer} />
    </div>

  </BrowserRouter>
);

export default Base;
