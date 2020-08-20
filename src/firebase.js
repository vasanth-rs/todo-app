import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClb1cOV1KVkwSH6te9ylPgMXB2r3XcEB0",
  authDomain: "todo-app-91643.firebaseapp.com",
  databaseURL: "https://todo-app-91643.firebaseio.com",
  projectId: "todo-app-91643",
  storageBucket: "todo-app-91643.appspot.com",
  messagingSenderId: "108128551755",
  appId: "1:108128551755:web:ec694c17cae2e73883dece",
  measurementId: "G-YFB4D1DXE4",
});

const db = firebaseApp.firestore();

export { db };
