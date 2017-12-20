import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import rootReducer from './reducers/index';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Store';

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__
//   && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store = { Store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );
