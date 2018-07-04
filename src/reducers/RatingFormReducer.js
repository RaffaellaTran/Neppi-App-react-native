import {
  RATING_UPDATE,
  RATING_CREATE,
  RATING_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  comment_rating: '',
  slider_value: '',
  check: false,
  request_hours: '',
  request_title: '',
  work_hours: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RATING_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
      case RATING_CREATE:
        return INITIAL_STATE;
        case RATING_SAVE_SUCCESS:
        return INITIAL_STATE;
    default:
      return state;
  }
};
