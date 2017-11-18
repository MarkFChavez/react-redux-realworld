import * as types from '../constants/actionTypes'

const initialState = {
  authLoading: false,
  isLoggedIn: !!localStorage.getItem('jwt')
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_STARTED:
      return { ...state, authLoading: true }
    case types.AUTH_SUCCESS:
      return { ...state, authLoading: false, isLoggedIn: !!localStorage.getItem('jwt') }
    case types.AUTH_FAILED:
      return initialState
    case types.AUTH_RESET:
      return { ...state, isLoggedIn: !!localStorage.getItem('jwt') }
    default:
      return state
  }
}

export default auth