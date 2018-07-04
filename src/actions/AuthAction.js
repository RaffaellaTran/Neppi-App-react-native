import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    };
};

  export const loginUser = (email, password, navigation) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      let person
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => firebase.database().ref(`users/people/`)
      .on('value',function(snapshot) {
        let usern= snapshot.val();
        let user = firebase.auth().currentUser;
        for (let key in usern) {
          if (user.uid=== key)
          {  console.log('LOGIN',usern[key]);
          firebase.database().ref(`users/people/${user.uid}`)
          .on('value',function(snapshot) {
            for (let key in snapshot.val()) {
              console.log('USER',snapshot.val()[key]);
              this.person  =snapshot.val()[key]
            }
          }
        )
      }
    }
    person=this.person
    console.log('LOG',person)
    fetch(person)
    .then(person =>
      console.log('USERNAME', person),
      loginUserSuccess(dispatch, user, person, navigation))
  })
  )  .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch, user, navigation))
      .catch(error => registerUserFail(dispatch))
    }
  );
    };
  };

  export const registerUser = (email, password, navigation) => {
    return (dispatch) => {
      dispatch({ type: REGISTER_USER });
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user,person, navigation))
          .catch(() => registerUserFail(dispatch));
        };
      };

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user,person, navigation) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,person
  }
);

navigation.dispatch(
  NavigationActions.navigate({ routeName: 'Homepage', params: { user, person }}) 

)
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAIL });
};

const registerUserSuccess = (dispatch, user, navigation) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  }
);

navigation.dispatch(NavigationActions.navigate({ routeName: 'PersonCreateWrapper', params: { user } }));
};
