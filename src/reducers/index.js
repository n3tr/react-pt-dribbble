import { combineReducers } from 'redux'
import popularShots from './popularShots'
import shotById from './shotById'

export default combineReducers({
  popular: popularShots,
  shotById: shotById
})
