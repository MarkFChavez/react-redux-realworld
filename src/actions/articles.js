import * as types from '../constants/actionTypes'
import api from '../api'

export const fetchGlobalArticles = (offset = 0, tag = '') => {
  return dispatch => {
    dispatch({ type: types.SET_APP_LOADING })
    dispatch({ type: types.UNSET_ARTICLES_COUNT })

    api.Articles.all(offset, tag)
      .then(response => {
        dispatch({ type: types.SET_ARTICLES, payload: response.data.articles })
        dispatch({ type: types.UNSET_APP_LOADING })
        dispatch({ type: types.SET_ARTICLES_COUNT, payload: response.data.articlesCount })
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

    api.Articles.show(slug)
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