
function favoriteReducer(state = [], action) {
  switch (action.type) {
    case 'FAVORITE_SHOT':
      const shotId = parseInt(action.shotId)
      if (state.indexOf(shotId) != -1) {
        return state.filter((id) => id != shotId)
      }
      return state.concat([shotId])
      break;
    default:
    return state
  }
}

export default favoriteReducer
