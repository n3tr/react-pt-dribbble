import fetchPopularShot from '../api/fetchPopularShot'
import fetchShotDetail from '../api/fetchShotDetail'

export function requestPopularShots() {
  return {
    type: 'REQUEST_POPULAR_SHOTS'
  }
}

export function receivePopularShots(shots) {
  return {
    type: 'RECEIVE_POPULAR_SHOTS',
    shots: shots
  }
}

export function fetchPopular() {
  return (dispatch, state) => {

    dispatch(requestPopularShots())

    fetchPopularShot()
    .then((shots) => {
      dispatch(receivePopularShots(shots))
    })
  }
}

export function requestShotDetail(shotId) {
  return {
    type: 'REQUEST_SHOT_DETAIL',
    shotId: shotId
  }
}

export function receiveShotDetail(shot) {
  return {
    type: 'RECEIVE_SHOT_DETAIL',
    shot
  }
}

export function fetchDetail(shotId) {
  return (dispatch) => {

    fetchShotDetail(shotId)
    .then((shot)=> {
      dispatch(receiveShotDetail(shot))
    })
  }
}

export function favoriteShot(id) {
  return {
    type: 'FAVORITE_SHOT',
    shotId: id
  }
}
