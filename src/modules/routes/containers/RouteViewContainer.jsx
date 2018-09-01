import React from 'react';
import { observer } from 'mobx-react';
import RouteView from '../components/RouteView';
import routeStore from '../RouteStore';

const RouteViewContainer = observer(() => (
  <RouteView
    routeID={routeStore.routeID}
    routeDetails={routeStore.routeDetails}
    state={routeStore.state}
    routeName={routeStore.routeName}
    routeDescription={routeStore.routeDescription}
  />
));

export default RouteViewContainer;
