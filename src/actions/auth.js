import * as types from '../constants/actionTypes'
import api from '../api'

export const signin = ({ email, password }, history) => {
  return dispatch => {
    dispatch({ type: types.AUTH_STARTED })
    api.Auth.signin(email, password)
      .then(response => {
        localStorage.setItem('jwt', response.data.user.token)
        history.push('/')
        dispatch({ type: types.AUTH_SUCCESS })
      })
      .catch(error => {
        dispatch({ type: types.AUTH_FAILED })
      })
  }
}

export const signout = history => {
  return dispatch => {
    dispatch({ type: types.SET_APP_LOADING })
    localStorage.removeItem('jwt')
    setTimeout(() => {
      history.push('/signin')
      dispatch({ type: types.AUTH_RESET })
      dispatch({ type: types.UNSET_APP_LOADING })
    }, 500)
  }
}