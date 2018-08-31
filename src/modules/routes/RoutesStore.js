import { observable, action, runInAction } from 'mobx';
import fetch from 'node-fetch';
import enhancedFetch from '../../utils/enhancedFetch';

class RoutesStore {
  @observable state;
  @observable routes;

  constructor() {
    this.state = 'pending'; // pending, done, error
    this.routes = [];
  }

  async fetchRoutesCall(data) {
    const response = await enhancedFetch(
      '/routesJSON',
      {
        body: data,
        method: 'get',
      },
    );
    return await response.json();
  }

  @action('Fetch Routes')
  fetchRoutes = async (data) => {
    const route = await this.fetchRoutesCall(data);
    runInAction('Update State after fetching Routes', () => {
      this.routes = route.routes;

    });
    /* return enhancedFetch(
      '/route/add',
      {
        body: data,
        method: 'post',
      },
    )
      .then((response) => {
        this.routeDescription = response.routeDescription;
        this.routeName = response.routeName;
        this.routeID = response.routeID;
      })
      .catch(error => console.error('Error:', error)); */
  };
}

const routesStore = new RoutesStore();
export default routesStore;
