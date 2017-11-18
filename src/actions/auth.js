import * as types from '../constants/actionTypes'
import api from '../api'
import { push } from 'react-router-redux'

export const signin = (email, password) => {
  return dispatch => {
    dispatch({ type: types.AUTH_STARTED })
    api.Auth.signin(email, password)
      .then(response => {
        dispatch({ type: types.AUTH_SUCCESS, payload: response.data.user })
        dispatch(push('/'))
      })
      .catch(error => {
        dispatch({ type: types.AUTH_FAILED })
      })
  }
}