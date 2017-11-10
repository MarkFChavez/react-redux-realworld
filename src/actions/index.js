import agent from '../agent'

export const fetchGlobalArticles = () => {
  return dispatch => {
    agent.Articles.all()
      .then(response => {
        dispatch({ type: 'SET_ARTICLES', payload: response.data.articles })
      })
      .catch(error => console.log(error))
  }
}