import {
  CONCEPT_UPDATE,
  CONCEPT_CREATE,
  CONCEPT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name_concept: '',
  image_concept: [],
  keyword_concept: '',
  description_concept: '',
  shift: '',
  select:[],
  author_concept:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONCEPT_UPDATE:
    return { ...state, [action.payload.prop]: action.payload.value };
    case CONCEPT_CREATE:
    return INITIAL_STATE;
    case CONCEPT_SAVE_SUCCESS:
    return INITIAL_STATE;
    default:
    return state;
  }
};
