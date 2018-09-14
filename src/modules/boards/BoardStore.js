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

  async activateSignalCall(deviceID, lock, color, mode) {
    const response = await enhancedFetch(
      `/activateSignal/${deviceID}/${lock}/${color}/${mode}`,
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

  activateSignalRequest = async (deviceID, lock, color, mode) => {
    await this.activateSignalCall(deviceID, lock, color, mode);
    runInAction('Update State after activating Signal', () => {
      this.state = 'done';
    });
  };

  // @action('Execute Column')

  @action('Activate Turnout')
  activateTurnout(deviceID, turnoutState) {
    this.state = 'pending';
    this.activateTurnoutRequest(deviceID, turnoutState);
  }

  @action('Activate Signal')
  activateSignal(deviceID, lock, color, mode) {
    this.state = 'pending';
    this.activateSignalRequest(deviceID, lock, color, mode);
  }
}

const boardStore = new BoardStore();
export default boardStore;
