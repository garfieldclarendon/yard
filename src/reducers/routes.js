import * as actionTypes from 'actions/actionTypes';

const INITIAL_STATE = {
  error: null,
  loading: false,
  routes: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ROUTES:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_ROUTES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        routes: action.payload.routes,
      };
    case actionTypes.FETCH_ROUTES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        routes: [],
      };
    default:
      return state;
  }
}
