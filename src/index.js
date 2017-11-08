import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Header from './components/Header';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// react-router-donm
import {
  BrowserRouter as Router
} from 'react-router-dom'

// setup dotenv
import { config } from 'dotenv';
config();

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <div>
        <Header />
        <App />
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
