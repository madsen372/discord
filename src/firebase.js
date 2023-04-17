import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxsrbbRbiq6MNTXglof4eTU2n1mj7lZ1c",
  authDomain: "discord-18a7c.firebaseapp.com",
  projectId: "discord-18a7c",
  storageBucket: "discord-18a7c.appspot.com",
  messagingSenderId: "119840166178",
  appId: "1:119840166178:web:e6721bffa5b166381b957b",
  measurementId: "G-G15PMBX79Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
