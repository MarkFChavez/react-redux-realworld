import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import Header from './components/Header'

/* redux */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

/* redux-thunk middleware */
import thunk from 'redux-thunk'

/* react-router-dom */
import {
  BrowserRouter as Router
} from 'react-router-dom'

/* semantic UI css */
import 'semantic-ui-css/semantic.css'

/* setup dotenv */
import { config } from 'dotenv'
config()

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Router>
      <div className='ui container'>
        <div className='ui grid'>
          <div className='column'>
            <Header />
            <App />
          </div>
        </div>
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
