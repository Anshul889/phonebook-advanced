import numbers from '../apis/numbers';
import { FETCH_NUMBERS, SIGN_IN, SIGN_OUT } from '../actions/types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchNumbers = () => async dispatch => {
  const response = await numbers.get('/581335f71000004204abaf83');

  dispatch({ type: FETCH_NUMBERS, payload: response.data.contacts});
};
