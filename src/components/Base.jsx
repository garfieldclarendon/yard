import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import baseStore from './BaseStore';
import Home from './pages/Home';
import Help from './pages/Help';
import RoutesContainer from '../modules/routes/containers/RoutesContainer';
import RouteViewContainer from '../modules/routes/containers/RouteViewContainer';
import RouteAddContainer from '../modules/routes/containers/RouteAddContainer';
import TurnoutsContainer from '../modules/turnouts/containers/TurnoutsContainer';
import SignalsContainer from '../modules/signals/containers/SignalsContainer';
import CollectionsContainer from '../modules/collections/containers/CollectionsContainer';
import BoardsContainer from '../modules/boards/containers/BoardsContainer';
import BoardViewContainer from '../modules/boards/containers/BoardViewContainer';

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
          <Route exact path="/configure/routes" component={RoutesContainer} />
          <Route exact path="/configure/routes/view/:routeID" component={RouteViewContainer} />
          <Route exact path="/configure/routes/add" component={RouteAddContainer} />
          <Route exact path="/configure/turnouts" component={TurnoutsContainer} />
          <Route exact path="/configure/signals" component={SignalsContainer} />
          <Route exact path="/configure/collections" component={CollectionsContainer} />
          <Route exact path="/run/boards" component={BoardsContainer} />
          <Route exact path="/run/boards/view/:boardID" component={BoardViewContainer} />
          <Route exact path="/help" component={Help} />
        </div>
      </BrowserRouter>);
  }
}

export default Base;
