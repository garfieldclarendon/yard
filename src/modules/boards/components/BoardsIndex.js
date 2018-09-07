import React from 'react';
import { observer } from 'mobx-react';
import SingleColumn from '../../../components/layout/SingleColumn';

@observer
class BoardsIndex extends React.Component {
  render() {
    return (
      <div>
        <SingleColumn>
          <h1>Boards</h1>
          <div>CA</div>
        </SingleColumn>
      </div>
    );
  }
}

export default BoardsIndex;
