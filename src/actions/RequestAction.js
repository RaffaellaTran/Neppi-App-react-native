  import firebase from 'firebase';
  import { Actions } from 'react-native-router-flux';
  import { NavigationActions } from 'react-navigation';
  import { REQUEST_UPDATE, REQUEST_CREATE, REQUEST_FETCH_SUCCESS, REQUEST_SAVE_SUCCESS} from './types';

  export const requestUpdate = ({ prop, value }) => {
    return { type: REQUEST_UPDATE, payload: { prop, value } };
  };

  export const requestCreate = ({ name_concept,author_concept, title, work_hours, image_request, description_request, contact, select, navigation }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`users/people/${currentUser.uid}/requests`)
        .push({ name_concept,author_concept, title, work_hours, image_request, description_request,select, contact })
        .then(() => successCreate(dispatch, navigation))
          .catch(error => alert(error))
      };
  };
  const successCreate = (dispatch, navigation)=> {
    dispatch ({
      type: REQUEST_CREATE
    });
      navigation.dispatch(NavigationActions.navigate({ routeName: 'Profile'}));
  }
  export const requestsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`users/people/${currentUser.uid}/requests`)
      .on('value', snapshot => {
        dispatch({ type: REQUEST_FETCH_SUCCESS, payload: snapshot.val() });
      });
    };
  };

  export const requestSave = ({ name_concept,author_concept, title, work_hours, image_request, description_request, contact, rid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`users/people/requests/${currentUser.uid}/${rid}`)
      .set({ name_concept,author_concept, title, work_hours, image_request, description_request, contact })
      .then(() => successSave(dispatch, navigation));
  };
  };

  const successSave = (dispatch, navigation)=> {
    dispatch ({
      type: REQUEST_SAVE_SUCCESS
    });
      navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage'}));
  }
