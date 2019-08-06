import numbers from '../apis/numbers';
import { FETCH_CONTACTS, SIGN_IN, SIGN_OUT, CREATE_CONTACT, EDIT_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from '../actions/types';
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

export const fetchContacts = () => async dispatch => {
  const response = await numbers.get('/numbers.json');

  dispatch({ type: FETCH_CONTACTS, payload: response.data});
};

export const fetchContact = (id) => async dispatch => {
  const response = await numbers.get(`/numbers/${id}`);

  dispatch({ type: FETCH_CONTACT, payload: response.data });
}

export const editContact = (id, formValues) => async dispatch => {
  const response = await numbers.patch(`/numbers/${id}`, formValues);

  dispatch({ type: EDIT_CONTACT, payload: response.data});
  history.push('/');
};

export const createContact = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await numbers.post('/numbers.json', {...formValues, userId});

  dispatch({ type: CREATE_CONTACT, payload: response.data });
  history.push('/');
};

export const deleteContact = id => async dispatch => {
   await numbers.delete(`/numebers/${id}`);

   dispatch({ type: DELETE_CONTACT, payload: id});
   history.push('/');
}
