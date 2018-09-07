import React from 'react';
import { withRouter } from 'react-router';
import SingleColumn from '../../../components/layout/SingleColumn';

@withRouter
class BoardView extends React.Component {
  render() {
    return (
      <SingleColumn>
        <h2>CA</h2>
        <img src="/images/boards/CA.png" alt="CA Board" />
      </SingleColumn>
    );
  }
}

export default BoardView;
