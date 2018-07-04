import {
  REQUEST_UPDATE,
  REQUEST_CREATE,
  REQUEST_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name_concept:'',
  work_hours: '',
  image_request: '',
  description_request:'',
  contact: '',
  title:'',
  select:[],
  author_concept:'',
  reviewer_conceptRating:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_UPDATE:
    return { ...state, [action.payload.prop]: action.payload.value };
    case REQUEST_CREATE:
    return INITIAL_STATE;
    case REQUEST_SAVE_SUCCESS:
    return INITIAL_STATE;
    default:
    return state;
  }
};
