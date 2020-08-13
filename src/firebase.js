import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA2WTlOLyP-kUi13w3POfe_ZaUpZ2FliCw',
  authDomain: 'chat-app-9ce8d.firebaseapp.com',
  databaseURL: 'https://chat-app-9ce8d.firebaseio.com',
  projectId: 'chat-app-9ce8d',
  storageBucket: 'chat-app-9ce8d.appspot.com',
  messagingSenderId: '424573898693',
  appId: '1:424573898693:web:446b470ae024e4b94905ac',
});

const db = firebaseApp.firestore();

export default db;
