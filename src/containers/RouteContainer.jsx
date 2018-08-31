import { connect } from 'react-redux';
import RouteAdd from '../routes/RouteAdd';

const mapStateToProps = state => ({
  ...state.route,
});

export default connect(mapStateToProps)(RouteAdd);
