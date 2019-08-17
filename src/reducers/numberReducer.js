import _ from 'lodash';
import { FETCH_CONTACTS, CREATE_CONTACT, FETCH_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions/types';

const numberReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};
    case CREATE_CONTACT:
      return {...state, [action.payload.id] : action.payload.id};
    case FETCH_CONTACT:
      return {...state, [action.payload.id] : action.payload.id};
    case EDIT_CONTACT:
      return {...state, [action.payload.id] : action.payload.id};
    case DELETE_CONTACT:
      return _.omit(state, action.payload);
    default:
      return state;
    }
};

export default numberReducer;
