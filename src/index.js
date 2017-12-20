import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
    document.getElementById('root')
  );
