import { combineReducers } from 'redux'
import recipe from './recipe'
import user from './user'

const appReducer = combineReducers({
  recipe,
  user
})

export default appReducer