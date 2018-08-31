import { connect } from 'react-redux';
import {
  fetchRoutes,
  fetchRoutesRequest,
  fetchRoutesError,
  fetchRoutesSuccess,
} from 'actions/routes.js';
import RoutesIndex from '../components/RoutesIndex';

const mapStateToProps = state => ({
  ...state.routes,
});

const mapDispatchToProps = dispatch => ({
  onFetchRoutes: () => {
    dispatch(fetchRoutes());
    fetchRoutesRequest()
      .then((response) => {
        if (response.error) {
          dispatch(fetchRoutesError(response));
        } else {
          dispatch(fetchRoutesSuccess(response));
        }
      })
      .catch(() => {
        dispatch(fetchRoutesError('An error has occurred. Please reload and try again.'));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesIndex);
