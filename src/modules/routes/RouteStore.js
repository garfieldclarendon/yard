import { observable, action, runInAction } from 'mobx';
import fetch from 'node-fetch';
import enhancedFetch from '../../utils/enhancedFetch';

class RouteStore {
  @observable state;
  @observable routeID;
  @observable routeDescription;
  @observable routeName;
  @observable routeDetails;

  /* this.deviceID = routeStatus[0].deviceID;
  this.routeEntryID = routeStatus[0].routeEntryID;
  this.routeID = routeStatus[0].routeID;
  this.turnoutState = routeStatus[0].turnoutState; */

  constructor() {
    this.state = 'pending'; // pending, done, error
    this.routeID = null;
    this.routeDescription = null;
    this.routeName = null;
    this.routeDetails = [];
  }

  async addRouteCall(data) {
    const response = await enhancedFetch(
      '/route/add',
      {
        body: data,
        method: 'post',
      },
    );
    return await response.json();
  }

  async fetchRouteName(routeID) {
    const response = await fetch(`http://localhost:3002/entityJSON/route/${routeID}`);
    return await response.json();
  }

  async fetchRouteDetails(routeID) {
    const response = await enhancedFetch(
      `/routeJSON/${routeID}`,
      {
        method: 'get',
      },
    );
    return await response.json();
  }

  @action('Add Route')
  addRoute = async (data) => {
    const route = await this.addRouteCall(data);
    runInAction('Update State after adding Route', () => {
      this.routeDescription = route.routeDescription;
      this.routeName = route.routeName;
      this.routeID = route.routeID;
    });
  };

  @action('Change Route to Fetch')
  changeRouteToFetch(routeID) {
    this.routeID = routeID;
    this.fetchRoute();
  }

  @action('Fetch Route Information for View')
  fetchRoute = async () => {
    if (!this.routeID) return;
    this.state = 'pending';

    const [routeName, routeDetails] = await Promise.all([
      this.fetchRouteName(this.routeID),
      this.fetchRouteDetails(this.routeID),
    ]);
    runInAction('Update State after fetching Route Data', () => {
      if (routeDetails[0]) {
        this.routeDetails = routeDetails;
      }

      this.routeName = routeName[0].routeName;
      this.routeDescription = routeName[0].routeDescription;
      this.state = 'done';
    });
  };
}

const routeStore = new RouteStore();
export default routeStore;
