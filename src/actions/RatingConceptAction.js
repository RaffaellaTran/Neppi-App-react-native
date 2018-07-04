import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
import { RATING_CONCEPT_UPDATE, RATING_CONCEPT_CREATE, RATING_CONCEPT_FETCH_SUCCESS, RATING_CONCEPT_SAVE_SUCCESS} from './types';

export const ratingConceptUpdate = ({ prop, value }) => {
  return { type: RATING_CONCEPT_UPDATE, payload: { prop, value } };
};

export const ratingConceptCreate = ({ name_conceptRating, cid_conceptRating,author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/concepts/${cid_conceptRating}/concept_ratings`)
      .push({ name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating })
      .then(() => successCreate(dispatch,reviewer_conceptRating, navigation));
    };
};
const successCreate = (dispatch,reviewer_conceptRating, navigation)=> {
  dispatch ({
    type: RATING_CONCEPT_CREATE
  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage', params:{person:{username: reviewer_conceptRating}}}));
}
export const ratingConceptFetch = ({cid_conceptRating}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/concepts/${cid_conceptRating}/concept_ratings`)
    .on('value', snapshot => {
      dispatch({ type: RATING_CONCEPT_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const ratingConceptSave = ({ name_conceptRating, cid_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating, crid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/concepts/${cid_conceptRating}/concept_ratings/${crid}`)
    .set({ name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating })
    .then(() => successSave(dispatch,reviewer_conceptRating, navigation));
};
};

const successSave = (dispatch,reviewer_conceptRating, navigation)=> {
  dispatch ({
    type: RATING_CONCEPT_SAVE_SUCCESS
  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage', params:{person:{username: reviewer_conceptRating}}}));
}
