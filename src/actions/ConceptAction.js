import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CONCEPT_UPDATE, CONCEPT_CREATE, CONCEPT_FETCH_SUCCESS, CONCEPT_SAVE_SUCCESS, CONCEPT_PASS} from './types';

import { NavigationActions } from 'react-navigation';

export const conceptUpdate = ({ prop, value }) => {
  return { type: CONCEPT_UPDATE, payload: { prop, value } };
};

export const conceptCreate = ({ name_concept,select, author_concept,image_concept,keyword_concept,description_concept, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/concepts/`)
      .push({ name_concept,author_concept, image_concept,keyword_concept,select,description_concept })
      .then(() => successCreate(dispatch,author_concept, navigation));
    };
};

const successCreate = (dispatch,author_concept, navigation)=> {
  dispatch ({
    type: CONCEPT_CREATE
  });

    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage', params:{person:{username: author_concept}}}));
}

export const conceptsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/concepts/`)
    .on('value', snapshot => {
      dispatch({ type: CONCEPT_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const conceptSave = ({ name_concept,author_concept, select,image_concept,keyword_concept,description_concept, cid, navigation }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/concepts/${cid}`)
    .set({ name_concept,author_concept, image_concept,select,keyword_concept,description_concept })
    .then(() => successSave(dispatch,author_concept, navigation));

};
};

const successSave = (dispatch,author_concept, navigation)=> {
  dispatch ({
    type: CONCEPT_SAVE_SUCCESS,

  });
    navigation.dispatch(NavigationActions.navigate({ routeName: 'Homepage',params:{person:{username: author_concept}}}));
}
