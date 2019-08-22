import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import numberReducer from './numberReducer';
import authReducer from './authReducer';
import favReducer from './favReducer';

export default combineReducers({
  numbers: numberReducer,
  auth: authReducer,
  form: formReducer,
  favourites: favReducer
});
