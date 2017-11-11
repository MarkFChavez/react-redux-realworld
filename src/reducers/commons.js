import * as types from '../constants/actionTypes'

const commons = (state = {}, action) => {
  switch (action.type) {
    case types.SET_APP_LOADING:
      return { ...state, appLoading: true }
    case types.UNSET_APP_LOADING:
      return { ...state, appLoading: false }
    default:
      return state
  }
}

export default commons