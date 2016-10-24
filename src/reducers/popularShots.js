
const initialState = {
  shots: [],
  fetching: false,
  error: null
}

function popularShotReducer(state = initialState, action) {
  switch (action.type) {

    case 'REQUEST_POPULAR_SHOTS':
      return Object.assign({}, state, { fetching: true})
      break;

    case 'RECEIVE_POPULAR_SHOTS':
      const allIds = action.shots.map((shot) => shot.id)
      return Object.assign({}, state, {
        fetching: false,
        shots: allIds
      })
      
    default:
      return state
  }
  return state
}

export default popularShotReducer
