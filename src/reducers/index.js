import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'

const reducers = combineReducers({
  article,
  articles
});

export default reducers;