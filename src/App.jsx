import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import ConfigureStore from 'store/configureStore';
import Base from './components/Base';

const store = ConfigureStore();

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('reactApp'),
  );
};

render(Base);

if (module.hot) {
  module.hot.accept(() => render(Base));
}
