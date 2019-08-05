import numbers from '../apis/numbers';
import { FETCH_NUMBERS, SIGN_IN, SIGN_OUT, CREATE_CONTACT } from '../actions/types';
import history from '../history';

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
  const response = await numbers.get('/numbers');

  dispatch({ type: FETCH_NUMBERS, payload: response.data.numbers});
};

export const createContact = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await numbers.post('/numbers.json', {...formValues, userId});

  dispatch({ type: CREATE_CONTACT, payload: response.data });
  history.push('/');
};
