import * as types from '../constants/actionTypes'
import api from '../api'

export const fetchTags = () => {
  return dispatch => {
    api.Tags.all()
    .then(response => {
      dispatch({ type: types.SET_TAGS, payload: response.data.tags })
    })
    .catch(error => console.log(error))
  }
}