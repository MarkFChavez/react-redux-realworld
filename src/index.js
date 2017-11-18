import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'
import { config } from 'dotenv'
import { history } from './history'
import 'semantic-ui-css/semantic.css'
import './assets/css/styles.css'

// Enables us to store different environment variables which can be
// accessed by calling `process.env`
config()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
