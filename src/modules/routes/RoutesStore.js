import { observable, action, runInAction } from 'mobx';
import fetch from 'node-fetch';
import enhancedFetch from '../../utils/enhancedFetch';

class RoutesStore {
  @observable state;
  @observable trainRoutes;

  constructor() {
    this.state = 'pending'; // pending, done, error
    this.trainRoutes = [];
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
  fetchRoutes() {
    this.state = 'pending';
    this.fetchRoutesRequest();
  }


  fetchRoutesRequest = async (data) => {
    const routesData = await this.fetchRoutesCall(data);
    runInAction('Update State after fetching Routes', () => {
      this.trainRoutes = routesData;
      this.state = 'done';
    });
  };
}

const routesStore = new RoutesStore();
export default routesStore;
