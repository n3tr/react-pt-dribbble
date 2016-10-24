
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
    default:
      return state
  }
  return state
}

export default shotById
