import React from 'react';
import { observer } from 'mobx-react';
import BoardsIndex from '../components/BoardsIndex';
import baseStore from '../../../components/BaseStore';

const BoardsContainer = observer(() => (
  <BoardsIndex
    state={baseStore.state}
  />
));

export default BoardsContainer;
