import * as types from '../constants/actionTypes'

const initialState = {
  appLoading: false,
  articlesCount: null
}

// appLoading {Boolean}
// articlesCount {Integer}
const commons = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_APP_LOADING:
      return { ...state, appLoading: true }
    case types.UNSET_APP_LOADING:
      return { ...state, appLoading: false }
    case types.SET_ARTICLES_COUNT:
      return { ...state, articlesCount: action.payload }
    case types.UNSET_ARTICLES_COUNT:
      return { ...state, articlesCount: null }
    default:
      return state
  }
}

export default commons