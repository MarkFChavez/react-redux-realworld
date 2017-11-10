import * as types from '../constants/actionTypes'

const articles = (state = [], action) => {
  switch (action.type) {
    case types.SET_ARTICLES:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default articles