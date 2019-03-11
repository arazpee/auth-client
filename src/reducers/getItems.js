import { GET_ITEMS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload;
    default:
      return state;
  }
}
