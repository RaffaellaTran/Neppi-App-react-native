import {
  RATING_CONCEPT_UPDATE,
  RATING_CONCEPT_CREATE,
  RATING_CONCEPT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {

  slider_valueRating: '',
  checkRating:false,
    comment_ratingConcept: '',
    name_conceptRating:'',
    description_conceptRating:'',
    author_conceptRating:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RATING_CONCEPT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
      case RATING_CONCEPT_CREATE:
        return INITIAL_STATE;
        case RATING_CONCEPT_SAVE_SUCCESS:
        return INITIAL_STATE;
    default:
      return state;
  }
};
