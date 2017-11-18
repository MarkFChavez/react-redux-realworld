import * as types from '../constants/actionTypes'
import api from '../api'
import { browserHistory } from 'react-router'

export const signin = ({ email, password }, history) => {
  return dispatch => {
    dispatch({ type: types.AUTH_STARTED })
    api.Auth.signin(email, password)
      .then(response => {
        localStorage.setItem('jwt', response.data.user.token)
        dispatch({ type: types.AUTH_SUCCESS })
        history.push('/')
      })
      .catch(error => {
        dispatch({ type: types.AUTH_FAILED })
      })
  }
}