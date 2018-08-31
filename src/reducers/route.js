import * as actionTypes from 'actions/actionTypes';

const INITIAL_STATE = {
  error: null,
  loading: false,
  route: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_ROUTE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_ROUTE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        route: action.payload,
      };
    case actionTypes.ADD_ROUTE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        route: {},
      };
    default:
      return state;
  }
}
