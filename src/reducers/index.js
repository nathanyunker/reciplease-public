import { combineReducers } from 'redux'
import recipe from './recipe'

const appReducer = combineReducers({
  recipe,
})

export default appReducer