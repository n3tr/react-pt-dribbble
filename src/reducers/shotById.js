
const initialState = {}
function shotById(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POPULAR_SHOTS':
      const idShotMap = action.shots.reduce(function(map, shot){
        map[shot.id] = shot
        return map
      } , {})
      return Object.assign({}, state, idShotMap)
      break;


    // REQUEST_SHOT_DETAIL
    case 'REQUEST_SHOT_DETAIL':
    const { shotId } = action
    return Object.assign(
      {},
      state,
      {
        [shotId]: Object.assign({}, state[shotId] || {}, { fetching: true } )
      }
    )
    // RECEIVE_SHOT_DETAIL
    case 'RECEIVE_SHOT_DETAIL':
      return Object.assign({}, state, { [action.shot.id]: action.shot })

    default:
      return state
  }
  return state
}

export default shotById
