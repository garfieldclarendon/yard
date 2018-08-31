import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(promise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
