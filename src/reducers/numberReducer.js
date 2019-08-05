import _ from 'lodash';
import { FETCH_NUMBERS, CREATE_CONTACT } from '../actions/types';

const numberReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_NUMBERS:
      return { ...state, ..._.mapKeys(action.payload, 'name')};
      case CREATE_CONTACT:
      return { ...state, [action.payload.id]: action.payload};
    default:
      return state;
    }
};

export default numberReducer;
