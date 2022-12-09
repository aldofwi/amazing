import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcgaHqOwoJ5kreB7hbqJj8wk-_kyQIsu8",
  authDomain: "amazing-16b7c.firebaseapp.com",
  projectId: "amazing-16b7c",
  storageBucket: "amazing-16b7c.appspot.com",
  messagingSenderId: "521044942759",
  appId: "1:521044942759:web:2a787bdeb5aebbdfeae082",
  measurementId: "G-92G1H98L07"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  export default firebase;
