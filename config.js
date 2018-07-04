import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA6TKxxoUEAkQsjQKFSTMlrHHMuSPPs6JA',
  authDomain: 'neppi-48176.firebaseapp.com',
  databaseURL: 'https://neppi-48176.firebaseio.com',
  projectId: 'neppi-48176',
  storageBucket: 'neppi-48176.appspot.com',
  messagingSenderId: '1039418453848'
}
firebase.initializeApp(config);

export default firebase;
