import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { observer } from 'mobx-react';
import SingleColumn from '../../../components/layout/SingleColumn';
import routeStore from '../RouteStore';

@observer
class RouteAdd extends React.Component {
  static propTypes = {
    routeID: PropTypes.string,
  };

  static defaultProps = {
    routeID: '',
  }

  onSubmit = (values) => {
    routeStore.addRoute(JSON.stringify(values, 0, 2));
  }

  render() {
    return this.props.routeID ?
      <Redirect to={`/routes/view/${this.props.routeID}`} /> : (
        <div>
          <SingleColumn>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <h2>Simple Default Input</h2>
                  <div>
                    <label htmlFor="routeName">Name</label>
                    <Field name="routeName" component="input" placeholder="Name" />
                  </div>
                  <div>
                    <label htmlFor="routeDescription">Description</label>
                    <Field name="routeDescription" component="input" placeholder="Description" />
                  </div>
                  <button type="submit" disabled={pristine || invalid}>
                    Add Route
                  </button>
                </form>
              )}
            />
          </SingleColumn>
        </div>
      );
  }
}

export default RouteAdd;
