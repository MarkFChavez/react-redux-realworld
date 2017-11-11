import agent from '../agent'
import * as types from '../constants/actionTypes'

export const fetchGlobalArticles = () => {
  return dispatch => {
    agent.Articles.all()
      .then(response => {
        dispatch({ type: types.SET_ARTICLES, payload: response.data.articles })
      })
      .catch(error => console.log(error))
  }
}

export const fetchArticle = slug => {
  return dispatch => {
    agent.Articles.show(slug)
      .then(response => {
        dispatch({ type: types.SET_ARTICLE, payload: response.data.article })
      })
      .catch(error => console.log(error))
  }
}

export const unsetArticle = () => ({ type: types.UNSET_ARTICLE })