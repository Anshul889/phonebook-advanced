import _ from 'lodash';
import { FETCH_FAV, ADD_FAV, REMOVE_FAV } from '../actions/types';

const favReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_FAV:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case ADD_FAV:
      return {...state, [action.payload]: action.payload};
    case REMOVE_FAV:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default favReducer;
