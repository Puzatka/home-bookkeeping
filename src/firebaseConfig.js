import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5_GuHRD_SQ2bQkC8XD2Nlc-ZR4pxSt98",
  authDomain: "home-bookkeeping-36d5e.firebaseapp.com",
  projectId: "home-bookkeeping-36d5e",
  storageBucket: "home-bookkeeping-36d5e.appspot.com",
  messagingSenderId: "813007258662",
  appId: "1:813007258662:web:acf296c421690628fd52e7",
  measurementId: "G-Z6W7SRVQXD"
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { fireDb, app };
