import { combineReducers } from 'redux';
import reddit from './reddit';
import recipe from './recipe';
import user from './user';

const appReducer = combineReducers({
  reddit,
  recipe,
  user
})

export default appReducer