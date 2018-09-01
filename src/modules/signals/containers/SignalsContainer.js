import React from 'react';
import { observer } from 'mobx-react';
import SignalsIndex from '../components/SignalsIndex';
import baseStore from '../../../components/BaseStore';

const SignalsContainer = observer(() => (
  <SignalsIndex
    state={baseStore.state}
    signals={baseStore.devices}
  />
));

export default SignalsContainer;
