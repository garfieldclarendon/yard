import React from 'react';
import { observer } from 'mobx-react';
import CollectionsIndex from '../components/CollectionsIndex';
import baseStore from '../../../components/BaseStore';

const CollectionsContainer = observer(() => (
  <CollectionsIndex
    state={baseStore.state}
    collections={baseStore.devices}
  />
));

export default CollectionsContainer;
