import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA52GfnHkAk723cAcWxQcnZt5qeI6FtUAI",
    authDomain: "letmeask-5a2c0.firebaseapp.com",
    databaseURL: "https://letmeask-5a2c0-default-rtdb.firebaseio.com",
    projectId: "letmeask-5a2c0",
    storageBucket: "letmeask-5a2c0.appspot.com",
    messagingSenderId: "613101567907",
    appId: "1:613101567907:web:624f5454bd7c86fae92416"
  };


  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

