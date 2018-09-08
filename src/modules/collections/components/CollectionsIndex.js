import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SingleColumn from '../../../components/layout/SingleColumn';
import Loader from '../../../components/atoms/Loader';

@observer
class CollectionsIndex extends React.Component {
  static propTypes = {
    collections: PropTypes.shape({}),
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
  };

  static defaultProps = {
    collections: [],
  };

  // Switch must have input and one output
  // Device class 2 is buttons and inputs
  // LEDs are outputs and 3
  findTurnoutDetails = devices => devices.filter(device => device.deviceClass === '6');

  render() {
    const { state, collections } = this.props;
    const isLoading = (state === 'pending');
    const collectionData = this.findTurnoutDetails(collections);
    console.log(collectionData);
    /*
    0: Unknown
    1: Unoccupied
    2: Occupied
    */
    return (
      <div>
        <SingleColumn>
          {isLoading && <Loader />}
          <h1>Collections</h1>
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
                data={collectionData}
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

export default CollectionsIndex;
