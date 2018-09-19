import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import SideColumn from '../../../components/layout/SideColumn';
import Loader from '../../../components/atoms/Loader';
import routeStore from '../RouteStore';
import baseStore from '../../../components/BaseStore';
import Button from '../../../components/atoms/Button';

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

  findSwitchDetails = deviceID =>
    baseStore.devices.filter(device => device.deviceID == deviceID);

  renderSwitch(details) {
    const switchDetails = this.findSwitchDetails(details.routeEntryID)[0] || {};
    return (
      <li key={`switch-${details.routeEntryID}`}>
        <h4>Switch {switchDetails.deviceName} #{details.routeEntryID}</h4>
        <b>Current state:</b> {details.turnoutState === '1' ? 'Open' : 'Closed'}
        <p>{switchDetails.deviceDescription}</p>
      </li>
    );
  }

  renderSidecontent() {
    return <Button text="Delete" />
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
      <SideColumn sideContent={this.renderSidecontent()}>
        {isLoading && <Loader />}<h2>Route {routeName} #{routeID}</h2>
        <ul>
          <li><b>Name: </b> {routeName}</li>
          <li><b>Route Desciption: </b> {routeDescription}</li>
        </ul>
        <h3>Linked Switches</h3>
        <ul>
          {routeDetails.map((switchItem, i) => this.renderSwitch(switchItem, i))}
        </ul>
      </SideColumn>
    );
  }
}

export default RouteView;
