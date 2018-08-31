import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SingleColumn from '../../../components/layout/SingleColumn';
import ActionAnchor from '../../../components/atoms/ActionAnchor';

const TableActions = glamorous.div({
  marginBottom: 20,
});

class RoutesIndex extends React.Component {
  static propTypes = {
    onFetchRoutes: PropTypes.func,
    routes: PropTypes.arrayOf(PropTypes.shape({ routeId: PropTypes.number })),
  };

  static defaultProps = {
    onFetchRoutes: () => {},
    routes: [],
  };

  constructor() {
    super();
    this.state = { selectedRoute: null };
  }

  componentDidMount = () => {
    this.props.onFetchRoutes();
  }

  handleCellClick = (rowInfo) => {
    this.setState({ selectedRoute: rowInfo.row.routeID });
  }

  render() {
    console.log(this.props.routes);
    return (
      <div>
        <SingleColumn>
          <h1>Routes</h1>
          <TableActions>
            <ActionAnchor
              href="/routes/add"
              isSolid={true}
              text="Add One"
            />
          </TableActions>
          {this.state.selectedRoute && <Redirect push to={`/routes/view/${this.state.selectedRoute}`} />}
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
            getTdProps={(state, rowInfo) => (
              {
                onClick: () => { this.handleCellClick(rowInfo); },
              }
            )}
          />
        </SingleColumn>
      </div>
    );
  }
}

export default RoutesIndex;
