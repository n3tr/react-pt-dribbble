
import reducer from '../popularShots'

describe('Popular Shot Reducer', () => {
  it('have initial state', () => {
    const expected = {
      shots: [],
      fetching: false,
      error: null
    }
    expect(
      reducer(undefined, { type: '@@INIT' })
    ).toEqual(expected)
  })

  it('fetching on REQUEST_POPULAR_SHOTS', () => {
    const state = {
      shots: [],
      fetching: false,
      error: null
    }
    const expected = {
      shots: [],
      fetching: true,
      error: null
    }
    expect(
      reducer(state, { type: 'REQUEST_POPULAR_SHOTS' })
    ).toEqual(expected)
  })

  it('stop fetching on RECEIVE_POPULAR_SHOTS and have shots id', () => {
    const state = {
      shots: [],
      fetching: true,
      error: null
    }
    const expected = {
      shots: [1, 2],
      fetching: false,
      error: null
    }

    const action = {
      type: 'RECEIVE_POPULAR_SHOTS',
      shots: [
        {
          "id": 1,
          "title": "Fixation [GIF]"
        },
        {
          "id": 2,
          "title": "Fixation [GIF]"
        }
      ]
    }

    expect(
      reducer(state, action)
    ).toEqual(expected)

  })
})
