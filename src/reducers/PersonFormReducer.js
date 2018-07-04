import {
  PERSON_UPDATE,
  PERSON_CREATE,
  PERSON_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
   keywords:'',
   skills:'',
   username:'',
   select:[],
   imageProfile:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERSON_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
      case PERSON_CREATE:
        return INITIAL_STATE;
        case PERSON_SAVE_SUCCESS:
        return INITIAL_STATE;
    default:
      return state;
  }
};
