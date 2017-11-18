import React from 'react'
import { render } from 'react-dom'
import App from './App'
import store from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.css'
import './assets/css/styles.css'

// Enables us to store different environment variables which can be
// accessed by calling `process.env`
import { config } from 'dotenv'
config()

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
