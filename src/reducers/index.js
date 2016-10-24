import { combineReducers } from 'redux'
import popularShots from './popularShots'
import shotById from './shotById'
import favorite from './favorite'

export default combineReducers({
  popular: popularShots,
  shotById: shotById,
  favorite: favorite
})
