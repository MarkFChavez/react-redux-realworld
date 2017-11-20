import * as types from '../constants/actionTypes'

const initialState = {
  authLoading: false,
  isLoggedIn: !!localStorage.getItem('jwt'),
  currentUser: null,
  errorMessage: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_STARTED:
      return { ...state, authLoading: true }
    case types.AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isLoggedIn: !!localStorage.getItem('jwt'),
        currentUser: action.payload
      }
    case types.AUTH_FAILED:
      return { ...initialState, errorMessage: action.payload }
    case types.AUTH_RESET:
      return { ...initialState, isLoggedIn: false }
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default auth