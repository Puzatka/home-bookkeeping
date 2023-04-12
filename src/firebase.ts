import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGES_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGES_SENDER_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(app);

export { firebaseDb, app };

// firebase.initializeApp(firebaseConfig);

// export default firebase.firestore()

// export const db = getFirestore(app);
