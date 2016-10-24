
import reducer from '../shotById'

describe('shotById reducer', () => {
  it('have initial state', () => {
    expect(
      reducer(undefined, { type: '@@INIT'})
    ).toEqual({})
  })

  it('have shot by id on RECEIVE_POPULAR_SHOTS', () => {
    const state = {}
    const expected = {
      1: {
        "id": 1,
        "title": "Shot 1",
      },
      2: {
        "id": 2,
        "title": "Shot 2",
      }
    }

    const actual = reducer(state, {
      type: 'RECEIVE_POPULAR_SHOTS',
      shots: [
        {
          "id": 1,
          "title": "Shot 1",
        },
        {
          "id": 2,
          "title": "Shot 2",
        }
      ]
    })

    expect(actual).toEqual(expected)
  })
})
