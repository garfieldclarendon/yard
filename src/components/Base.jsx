import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import baseStore from './BaseStore';
import Home from './pages/Home';
import RoutesContainer from '../modules/routes/containers/RoutesContainer';
import RouteViewContainer from '../modules/routes/containers/RouteViewContainer';
import RouteAddContainer from '../modules/routes/containers/RouteAddContainer';
import TurnoutsContainer from '../modules/turnouts/containers/TurnoutsContainer';
import SignalsContainer from '../modules/signals/containers/SignalsContainer';
import CollectionsContainer from '../modules/collections/containers/CollectionsContainer';

@observer
class Base extends React.Component {
  componentDidMount = () => {
    baseStore.fetchBaseData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/routes" component={RoutesContainer} />
          <Route exact path="/routes/view/:routeID" component={RouteViewContainer} />
          <Route exact path="/routes/add" component={RouteAddContainer} />
          <Route exact path="/turnouts" component={TurnoutsContainer} />
          <Route exact path="/signals" component={SignalsContainer} />
          <Route exact path="/collections" component={CollectionsContainer} />
        </div>
      </BrowserRouter>);
  }
}

export default Base;
