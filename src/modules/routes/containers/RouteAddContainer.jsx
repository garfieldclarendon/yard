import React from 'react';
import { observer } from 'mobx-react';
import RouteAdd from '../components/RouteAdd';
import routeStore from '../RouteStore';

const RouteAddContainer = observer(() => (
  <RouteAdd routeID={routeStore.routeID} />
));

export default RouteAddContainer;
