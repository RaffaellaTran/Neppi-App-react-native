import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { PERSON_UPDATE, PERSON_CREATE, PERSON_FETCH_SUCCESS, PERSON_SAVE_SUCCESS} from './types';
import { NavigationActions } from 'react-navigation';

export const personUpdate = ({ prop, value }) => {
  return { type: PERSON_UPDATE, payload: { prop, value } };
};

export const personCreate = ({  uid,imageProfile, keywords, skills,username, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/contact`).push({  imageProfile, keywords, skills, username , })
    firebase.database().ref(`users/people/${currentUser.uid}`)
      .push({  imageProfile, keywords, skills, username , })
      .then((uid) => successCreate(dispatch, imageProfile,keywords, skills,username, navigation));
    };
};

const successCreate = (dispatch,keywords, imageProfile,skills,username, navigation)=> {
  dispatch ({
    type: PERSON_CREATE
  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage', params:{ person: { imageProfile, keywords, skills, username  } }}));
}

export const personsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/contact`)
    .on('value', snapshot => {
      dispatch({ type: PERSON_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const personSave = ({  imageProfile, keywords, skills, username , uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/people/${uid}`)
    .set({  imageProfile, keywords, skills, username })
    .then(() => successSave(dispatch, navigation));

};
};

const successSave = (dispatch, navigation)=> {
  dispatch ({
    type: PERSON_SAVE_SUCCESS,

  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Profile'}));
}
