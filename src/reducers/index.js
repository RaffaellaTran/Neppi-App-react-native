import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';
import AuthReducer from './AuthReducer';
import ConceptFormReducer from './ConceptFormReducer';
import ConceptReducer from './ConceptReducer';
import PersonFormReducer from './PersonFormReducer';
import PersonReducer from './PersonReducer';
import RequestFormReducer from './RequestFormReducer';
import RequestReducer from './RequestReducer';
import RatingConceptFormReducer from './RatingConceptFormReducer';
import RatingConceptReducer from './RatingConceptReducer';
import RatingFormReducer from './RatingFormReducer';
import RatingReducer from './RatingReducer';


const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }
}

export default combineReducers({
  auth: AuthReducer,
  conceptForm: ConceptFormReducer,
  concepts: ConceptReducer,
  personForm: PersonFormReducer,
  persons: PersonReducer,
  requestForm: RequestFormReducer,
  requests: RequestReducer,
  ratingConceptForm: RatingConceptFormReducer,
  ratingConcepts: RatingConceptReducer,
  ratingForm: RatingFormReducer,
  ratings: RatingReducer,

  });
