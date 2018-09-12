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
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
    turnouts: PropTypes.shape({}),
  };

  static defaultProps = {
    turnouts: [],
  };

  findTurnoutDetails = devices =>
    devices.filter(device => device.deviceClass === '1');

  render() {
    // State: 0 Unknown (probably not hooked up)
    // State: 1 Normal
    // State: 2 Throwing to diverging
    // State: 3 diverging
    // State: 4 Throwing to normal
    const isLoading = (this.props.state === 'pending');
    const turnoutData = this.findTurnoutDetails(this.props.turnouts);
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
                {
                  Header: 'deviceID',
                  accessor: 'deviceID',
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
