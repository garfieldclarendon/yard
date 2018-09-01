import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import SingleColumn from '../../../components/layout/SingleColumn';
import Loader from '../../../components/atoms/Loader';
import routeStore from '../RouteStore';

@withRouter
@observer
class RouteView extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        routeID: PropTypes.string,
      }),
    }).isRequired,
    routeDescription: PropTypes.string,
    routeDetails: PropTypes.shape(),
    routeID: PropTypes.string,
    routeName: PropTypes.string,
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
  };

  static defaultProps = {
    routeDescription: '',
    routeDetails: [],
    routeID: '',
    routeName: '',
  }

  componentDidMount = () => {
    routeStore.changeRouteToFetch(this.props.match.params.routeID);
  }

  renderSwitch(details) {
    return (
      <div key={`switch-${details.routeEntryID}`}>
        <h4>Switch #{details.routeEntryID}</h4>
        <b>Current state:</b> {details.turnoutState === '1' ? 'Open' : 'Closed'}
      </div>
    );
  }

  render() {
    const {
      routeDescription,
      routeDetails,
      routeName,
      routeID,
      state,
    } = this.props;

    const isLoading = (state === 'pending');
    return (
      <SingleColumn>
        {isLoading && <Loader />}<h2>Route {routeName} #{routeID}</h2>
        <ul>
          <li><b>Name: </b> {routeName}</li>
          <li><b>Route Desciption: </b> {routeDescription}</li>
        </ul>
        <h3>Linked Switches</h3>
        { routeDetails.map((switchItem, i) => this.renderSwitch(switchItem, i)) }
      </SingleColumn>
    );
  }
}

export default RouteView;
