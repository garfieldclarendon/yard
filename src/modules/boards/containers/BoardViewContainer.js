import React from 'react';
import { observer } from 'mobx-react';
import BoardView from '../components/BoardView';

const BoardViewContainer = observer(() => (
  <BoardView />
));

export default BoardViewContainer;
