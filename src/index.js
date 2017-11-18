import React from 'react'
import { render } from 'react-dom'
import App from './App'
import store from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history } from './history'
import 'semantic-ui-css/semantic.css'
import './assets/css/styles.css'

// Enables us to store different environment variables which can be
// accessed by calling `process.env`
import { config } from 'dotenv'
config()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
