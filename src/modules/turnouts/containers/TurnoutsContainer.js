import React from 'react';
import { observer } from 'mobx-react';
import TurnoutsIndex from '../components/TurnoutsIndex';
import baseStore from '../../../components/BaseStore';

const TurnoutsContainer = observer(() => (
  <TurnoutsIndex
    state={baseStore.state}
    turnouts={baseStore.devices}
  />
));

export default TurnoutsContainer;
