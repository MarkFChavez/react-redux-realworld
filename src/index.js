import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './configureStore'
import { BrowserRouter as Router } from 'react-router-dom'
import { config } from 'dotenv'
import 'semantic-ui-css/semantic.css'
config()

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
