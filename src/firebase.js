import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //your firebase sdk config
   apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

const db = firebaseApp.firestore();

export { db };
