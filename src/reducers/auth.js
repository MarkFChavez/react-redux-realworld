import * as types from '../constants/actionTypes'

const getToken = localStorage.getItem('jwt')

const initialState = {
  authLoading: false,
  isLoggedIn: !!getToken,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_STARTED:
      return { ...state, authLoading: true }
    case types.AUTH_SUCCESS:
      return { ...state, authLoading: false, isLoggedIn: !!getToken }
    case types.AUTH_FAILED:
      return initialState
    default:
      return state
  }
}

export default auth