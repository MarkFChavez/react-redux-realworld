import agent from '../agent'
import * as types from '../constants/actionTypes'

export const fetchGlobalArticles = () => {
  return dispatch => {
    dispatch({ type: types.SET_APP_LOADING })

    agent.Articles.all()
      .then(response => {
        dispatch({ type: types.SET_ARTICLES, payload: response.data.articles })
        dispatch({ type: types.UNSET_APP_LOADING })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: types.UNSET_APP_LOADING })
      })
  }
}

export const fetchArticle = slug => {
  return dispatch => {
    dispatch({ type: types.SET_APP_LOADING })

    agent.Articles.show(slug)
      .then(response => {
        dispatch({ type: types.SET_ARTICLE, payload: response.data.article })
        dispatch({ type: types.UNSET_APP_LOADING })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: types.UNSET_APP_LOADING })
      })
  }
}

export const unsetArticle = () => ({ type: types.UNSET_ARTICLE })