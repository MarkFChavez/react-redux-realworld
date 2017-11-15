import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'
import tags from './tags'
import commons from './commons'

const reducers = combineReducers({
  article,
  articles,
  tags,
  commons
});

export default reducers;