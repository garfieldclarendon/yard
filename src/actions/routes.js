import {
  ADD_ROUTE,
  ADD_ROUTE_ERROR,
  ADD_ROUTE_SUCCESS,
  FETCH_ROUTES,
  FETCH_ROUTES_ERROR,
  FETCH_ROUTES_SUCCESS,
} from 'actions/actionTypes';
import enhancedFetch from '../utils/enhancedFetch';

export function fetchRoutes() {
  return {
    type: FETCH_ROUTES,
  };
}

export function fetchRoutesRequest() {
  return enhancedFetch(
    '/routesJSON',
    {
      method: 'get',
    },
  );
}

export function fetchRoutesError(error) {
  return {
    error,
    type: FETCH_ROUTES_ERROR,
  };
}

export function fetchRoutesSuccess(payload) {
  return {
    payload,
    type: FETCH_ROUTES_SUCCESS,
  };
}

export function addRoute() {
  return {
    type: ADD_ROUTE,
  };
}

export function addRouteRequest() {
  return enhancedFetch(
    '/routesJSON',
    {
      method: 'post',
    },
  );
}

export function addRouteError(error) {
  return {
    error,
    type: ADD_ROUTE_ERROR,
  };
}

export function addRouteSuccess(payload) {
  return {
    payload,
    type: ADD_ROUTE_SUCCESS,
  };
}
