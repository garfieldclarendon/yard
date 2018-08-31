import React from 'react';
import { observer } from 'mobx-react';
import RouteView from '../components/RouteView';
import routeStore from '../RouteStore';

const RouteViewContainer = observer(() => (
  <RouteView
    deviceID={routeStore.deviceID}
    routeEntryID={routeStore.routeEntryID}
    routeID={routeStore.routeID}
    state={routeStore.state}
    turnoutState={routeStore.turnoutState}
    routeName={routeStore.routeName}
    routeDescription={routeStore.routeDescription}
  />
));

export default RouteViewContainer;
