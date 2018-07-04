import {
  CONCEPT_FETCH_SUCCESS,
  CONCEPT_PASS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONCEPT_FETCH_SUCCESS:
      return action.payload;
    case CONCEPT_PASS:
      return action.payload;
    default:
      return state;
  }
};
