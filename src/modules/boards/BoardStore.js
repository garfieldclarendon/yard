import { observable, action, runInAction } from 'mobx';
import enhancedFetch from '../../utils/enhancedFetch';

class BoardStore {
  @observable state;

  @observable deviceID;

  @observable turnoutState;

  constructor() {
    this.state = 'pending'; // pending, done, error
    this.deviceID = null;
    this.turnoutState = '1';
  }

  async activateTurnoutCall(deviceID, turnoutState) {
    const response = await enhancedFetch(
      `/activateTurnout/${deviceID}/${turnoutState}`,
      {
        method: 'get',
      },
    );
    return await response.json();
  }

  activateTurnoutRequest = async (deviceID, turnoutState) => {
    await this.activateTurnoutCall(deviceID, turnoutState);
    runInAction('Update State after activating Turnout', () => {
      this.state = 'done';
    });
  };

  @action('Activate Turnout')
  activateTurnout(deviceID, turnoutState) {
    this.state = 'pending';
    this.activateTurnoutRequest(deviceID, turnoutState);
  }
}

const boardStore = new BoardStore();
export default boardStore;
