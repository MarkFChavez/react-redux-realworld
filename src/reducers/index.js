import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'
import appLoading from './appLoading'

const reducers = combineReducers({
  article,
  articles,
  appLoading
});

export default reducers;