import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1w6Xl9sgZinTZtbmzOeppZhNOh2VVGzE",
  authDomain: "flutter-test-auth-3e9ea.firebaseapp.com",
  projectId: "flutter-test-auth-3e9ea",
  storageBucket: "flutter-test-auth-3e9ea.appspot.com",
  messagingSenderId: "544835106287",
  appId: "1:544835106287:web:45936047d31d403d71321a",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoredb = firebaseApp.firestore();
const db = firebaseApp.database();

export { db, firestoredb };
