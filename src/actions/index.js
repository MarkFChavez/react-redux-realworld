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