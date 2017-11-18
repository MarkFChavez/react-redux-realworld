import * as types from '../constants/actionTypes'

const initialState = {
  authLoading: false,
  isLoggedIn: false,
  currentUser: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_STARTED:
      return { ...state, authLoading: true }
    case types.AUTH_SUCCESS:
      return { ...state, authLoading: false, isLoggedIn: true, currentUser: action.payload }
    case types.AUTH_FAILED:
      return initialState
    default:
      return state
  }
}

export default auth