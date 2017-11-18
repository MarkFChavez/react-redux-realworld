import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'
import auth from './auth'
import tags from './tags'
import commons from './commons'
import { routerReducer } from 'react-router-redux/reducer';

const reducers = combineReducers({
  article,
  articles,
  auth,
  tags,
  commons,
  router: routerReducer
});

export default reducers;