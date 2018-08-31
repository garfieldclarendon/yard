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
    deviceID: PropTypes.string,
    match: PropTypes.shape({
      params: PropTypes.shape({
        routeID: PropTypes.string,
      }),
    }).isRequired,
    routeDescription: PropTypes.string,
    routeEntryID: PropTypes.string,
    routeID: PropTypes.string,
    routeName: PropTypes.string,
    state: PropTypes.oneOf(['pending', 'done', 'error']).isRequired,
    turnoutState: PropTypes.string,
  };

  static defaultProps = {
    deviceID: '',
    routeDescription: '',
    routeEntryID: '',
    routeID: '',
    routeName: '',
    turnoutState: '',
  }

  componentDidMount = () => {
    routeStore.changeRouteToFetch(this.props.match.params.routeID);
  }

  render() {
    const {
      deviceID,
      routeDescription,
      routeName,
      routeEntryID,
      routeID,
      state,
      turnoutState,
    } = this.props;

    const isLoading = (state === 'pending');

    return (
      <SingleColumn>
        {isLoading && <Loader />}<h2>Route #{routeID}</h2>
        <ul>
          <li><b>Name: </b> {routeName}</li>
          <li><b>Route Desciption: </b> {routeDescription}</li>
          <li><b>Route entityID: </b> {routeEntryID}</li>
          <li><b>RouteID: </b> {routeID}</li>
          <li><b>Route View for: </b> {deviceID}</li>
          <li><b>Turnout State: </b>{turnoutState}</li>
        </ul>
      </SingleColumn>
    );
  }
}

export default RouteView;
