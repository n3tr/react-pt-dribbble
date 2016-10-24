function requestPopularShots() {
  return {
    type: 'REQUEST_POPULAR_SHOTS'
  }
}

function receivePopularShots(shots) {
  return {
    type: 'RECEIVE_POPULAR_SHOTS',
    shots: shots
  }
}
