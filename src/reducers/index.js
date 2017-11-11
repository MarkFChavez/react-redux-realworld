import { combineReducers } from 'redux'
import articles from './articles'
import article from './article'
import commons from './commons'

// article - contains the currently selected article
// articles - contains an array of articles
// commons - contains some states related to app (e.g. loading state)
const reducers = combineReducers({
  article,
  articles,
  commons
});

export default reducers;