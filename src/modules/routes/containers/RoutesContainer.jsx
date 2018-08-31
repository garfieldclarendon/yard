import React from 'react';
import { observer } from 'mobx-react';
import RoutesIndex from '../components/RoutesIndex';
import routesStore from '../RoutesStore';

const RoutesContainer = observer(() => (
  <RoutesIndex
    routes={routesStore.trainRoutes}
    state={routesStore.state}
  />
));

export default RoutesContainer;
