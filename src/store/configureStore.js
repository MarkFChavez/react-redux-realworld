import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { middleware } from '../history';
import {persistStore, autoRehydrate} from 'redux-persist'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(middleware, thunk),
    autoRehydrate()
  )
)

persistStore(store)

export default store