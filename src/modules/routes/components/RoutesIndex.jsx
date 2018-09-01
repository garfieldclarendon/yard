import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SingleColumn from '../../../components/layout/SingleColumn';
import ActionAnchor from '../../../components/atoms/ActionAnchor';
import Loader from '../../../components/atoms/Loader';
import routesStore from '../RoutesStore';

const TableActions = glamorous.div({
  marginBottom: 20,
});

@withRouter
@observer
class RoutesIndex extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({ routeId: PropTypes.number })),
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
  };

  static defaultProps = {
    routes: [],
  };

  constructor() {
    super();
    this.state = { selectedRoute: null };
  }

  componentDidMount = () => {
    routesStore.fetchRoutes();
  }

  handleCellClick = (rowInfo) => {
    this.setState({ selectedRoute: rowInfo.row.routeID });
  }

  render() {
    const { state, routes } = this.props;
    const { selectedRoute } = this.state;
    const isLoading = (state === 'pending');
    console.log(selectedRoute);
    return (
      <div>
        <SingleColumn>
          {isLoading && <Loader />}
          <h1>Routes</h1>
          <TableActions>
            <ActionAnchor
              href="/routes/add"
              isSolid={true}
              text="Add One"
            />
          </TableActions>
          {selectedRoute && <Redirect push to={`/routes/view/${selectedRoute}`} />}
          {!isLoading
            && (
            <ReactTable
              className="-striped -highlight"
              columns={[
                {
                  Header: 'ID',
                  accessor: 'routeID',
                },
                {
                  Header: 'Name',
                  accessor: 'routeName',
                },
                {
                  Header: 'Description',
                  accessor: 'routeDescription',
                },
              ]}
              data={routes}
              getTdProps={(stateInfo, rowInfo) => (
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

export default RoutesIndex;
