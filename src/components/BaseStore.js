import { observable, action, runInAction } from 'mobx';
import enhancedFetch from '../utils/enhancedFetch';

class BaseStore {
  @observable devices;

  constructor() {
    this.state = 'pending'; // pending, done, error
    this.devices = [];
  }

  async baseDataCall() {
    const response = await enhancedFetch(
      '/devices',
      {
        method: 'get',
      },
    );
    return await response.json();
  }

  @action('Fetch Base Data')
  fetchBaseData = async (data) => {
    const devices = await this.baseDataCall(data);
    runInAction('Update State after fetching base data', () => {
      this.devices = devices;
      this.state = 'done';
    });
  };
}
const baseStore = new BaseStore();
export default baseStore;
