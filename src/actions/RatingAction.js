import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
import { RATING_UPDATE, RATING_CREATE, RATING_FETCH_SUCCESS, RATING_SAVE_SUCCESS} from './types';

export const ratingUpdate = ({ prop, value }) => {
  return { type: RATING_UPDATE, payload: { prop, value } };
};

export const ratingCreate = ({ request_title, request_description,work_hours, comment_rating, slider_value, check, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/people/${currentUser.uid}/requests/ratings`)
      .push({ request_title, request_description,work_hours, comment_rating, slider_value, check })
      .then(() => successCreate(dispatch, navigation));
    };
};
const successCreate = (dispatch, navigation)=> {
  dispatch ({
    type: RATING_CREATE
  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage'}));
}
export const ratingFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/people/${currentUser.uid}/requests/ratings`)
    .on('value', snapshot => {
      dispatch({ type: RATING_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const ratingSave = ({ request_title, request_description,work_hours, comment_rating, slider_value, check, ratid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/people/${currentUser.uid}/requests/ratings/${ratid}`)
    .set({ request_title, request_description,work_hours, comment_rating, slider_value, check })
    .then(() => successSave(dispatch, navigation));
};
};

const successSave = (dispatch, navigation)=> {
  dispatch ({
    type: RATING_SAVE_SUCCESS
  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage'}));
}
