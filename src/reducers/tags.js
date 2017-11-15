import * as types from '../constants/actionTypes'

const tags = (state = [], action) => {
  switch (action.type) {
    case types.SET_TAGS:
      return action.payload
    default:
      return state
  }
}

export default tags