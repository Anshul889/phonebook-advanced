import numbers from '../apis/numbers';
import { FETCH_CONTACTS, SIGN_IN, SIGN_OUT, CREATE_CONTACT, EDIT_CONTACT, DELETE_CONTACT, FETCH_CONTACT, FETCH_FAV, ADD_FAV, REMOVE_FAV } from '../actions/types';
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
  const fetchedContacts = [];
  for ( let key in response.data ) {
                    fetchedContacts.push( {
                        ...response.data[key],
                        id: key
                    });
                }

  dispatch({ type: FETCH_CONTACTS, payload: fetchedContacts});
};

export const fetchContact = (id) => async dispatch => {
  const response = await numbers.get(`/numbers/${id}.json`);
  const fetchedContact = {...response.data, id};
  console.log(fetchedContact);
  dispatch({ type: FETCH_CONTACT, payload: fetchedContact});
}

export const editContact = (id, formValues) => async dispatch => {
  const response = await numbers.patch(`/numbers/${id}.json`, formValues);
  const editedContact = {...response.data, id};
  console.log(editedContact);
  dispatch({ type: EDIT_CONTACT, payload: editedContact});
  history.push('/');
};

export const createContact = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await numbers.post('/numbers.json', {...formValues, userId});
  dispatch({ type: CREATE_CONTACT, payload: response.data});
  history.push('/');
};

export const deleteContact = id => async dispatch => {
   await numbers.delete(`/numbers/${id}.json`);

   dispatch({ type: DELETE_CONTACT, payload: id});
   history.push('/');
}

export const fetchFavourites = () => async dispatch => {
  const response = await numbers.get('/favourites.json');
  const fetchedFavourites = [];
  for ( let key in response.data ) {
                    fetchedFavourites.push( {
                        ...response.data[key],
                        id: key
                    });
                }

  dispatch({ type: FETCH_FAV, payload: fetchedFavourites});
};

export const addFavourite = number => async dispatch => {
  const response = await numbers.post('/favourites.json', number);
  dispatch({type: ADD_FAV, payload: response.data});
}

export const removeFavourite = id => async dispatch => {
  await numbers.delete(`/favourites/${id}.json`);
  dispatch({ type: REMOVE_FAV, payload: id});
}
