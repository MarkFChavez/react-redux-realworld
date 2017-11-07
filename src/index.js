import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// setup dotenv
import { config } from 'dotenv';
config();

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
