import * as types from '../constants/actionTypes'

const article = (state = null, action) => {
  switch (action.type) {
    case types.SET_ARTICLE:
      return action.payload
    case types.UNSET_ARTICLE:
      return null
    default:
      return state
  }
}

export default article