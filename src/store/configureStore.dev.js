import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
}
