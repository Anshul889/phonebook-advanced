import _ from 'lodash';
import { FETCH_NUMBERS } from '../actions/types';

const numberReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_NUMBERS:
      return { ...state, ..._.mapKeys(action.payload, 'name')};
    default:
      return state;
    }
};

export default numberReducer;
