import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import authReducer from './authReducer';

export default combineReducers({
  numbers: numberReducer,
  auth: authReducer,
});
