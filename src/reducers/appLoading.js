import * as types from '../constants/actionTypes'

const appLoading = (state = false, action) => {
  switch (action.type) {
    case types.SET_APP_LOADING:
      return true
    case types.UNSET_APP_LOADING:
      return false
    default:
      return state
  }
}

export default appLoading