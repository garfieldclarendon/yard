import * as actionTypes from 'actions/actionTypes';

const INITIAL_STATE = {
  foo: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.BAR:
      return {
        ...state,
        foo: true,
      };
    default:
      return state;
  }
}
