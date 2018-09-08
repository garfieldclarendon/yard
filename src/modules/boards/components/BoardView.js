import React from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router';
import SingleColumn from '../../../components/layout/SingleColumn';

const BoardWrapper = glamorous.div({
  '& .positionLight': {
    backgroundColor: 'yellow',
    borderRadius: '10px',
    height: '20px',
    position: 'absolute',
    width: '20px',
  },
  position: 'relative',
});

@withRouter
class BoardView extends React.Component {
  render() {
    return (
      <SingleColumn>
        <h2>CA</h2>
        <BoardWrapper>
          <div id="positionLight1" className="positionLight" />
          <img src="/images/boards/CA.png" alt="CA Board" />
        </BoardWrapper>
      </SingleColumn>
    );
  }
}

export default BoardView;
