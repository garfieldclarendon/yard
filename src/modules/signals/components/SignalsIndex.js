import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SingleColumn from '../../../components/layout/SingleColumn';
import Loader from '../../../components/atoms/Loader';

@observer
class SignalsIndex extends React.Component {
  static propTypes = {
    signals: PropTypes.shape({}),
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
  };

  static defaultProps = {
    signals: [],
  };

  findTurnoutDetails = devices => devices.filter(device => device.deviceClass === '3');

  render() {
    const { state, signals } = this.props;
    const isLoading = (state === 'pending');
    const signalData = this.findTurnoutDetails(signals);
    console.log(signalData);
    return (
      <div>
        <SingleColumn>
          {isLoading && <Loader />}
          <h1>Signals</h1>
          {!isLoading
            && (
              <ReactTable
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
                data={signalData}
                getTdProps={(stateData, rowInfo) => (
                  {
                    onClick: () => { this.handleCellClick(rowInfo); },
                  }
                )}
              />
            )}
        </SingleColumn>
      </div>
    );
  }
}

export default SignalsIndex;
