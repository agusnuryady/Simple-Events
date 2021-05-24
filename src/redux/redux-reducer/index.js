import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import persist from './persist';
import user from './user';

export default combineReducers({
  persist,
  user,
});
