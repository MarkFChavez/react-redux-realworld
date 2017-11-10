const initialState = []

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default articles