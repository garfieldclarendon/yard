import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SingleColumn from '../../../components/layout/SingleColumn';
import Loader from '../../../components/atoms/Loader';

@observer
class TurnoutsIndex extends React.Component {
  static propTypes = {
    turnouts: PropTypes.shape({}),
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
  };

  static defaultProps = {
    turnouts: [],
  };

  findTurnoutDetails = devices =>
    devices.filter(device => device.deviceClass === '2');

  render() {
    const isLoading = (this.props.state === 'pending');
    const turnoutData = this.findTurnoutDetails(this.props.turnouts);
    console.log(turnoutData);
    return (
      <div>
        <SingleColumn>
          {isLoading && <Loader />}<h1>Turnouts</h1>
          {!isLoading && <ReactTable
            className="-striped -highlight"
            columns={[
              {
                Header: 'Name',
                accessor: 'deviceName',
              },
              {
                Header: 'Desciption',
                accessor: 'deviceDescription',
               },
               {
                 Header: 'state',
                 accessor: 'deviceState',
                },
            ]}
            data={turnoutData}
            getTdProps={(state, rowInfo) => (
              {
                onClick: () => { this.handleCellClick(rowInfo); },
              }
            )}
          /> }
        </SingleColumn>
      </div>
    );
  }
}

export default TurnoutsIndex;
