import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'
import commons from './commons'

const reducers = combineReducers({
  article,
  articles,
  commons
});

export default reducers;