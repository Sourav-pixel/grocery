// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSNa4Xi67SO5-LPjDBgYjS6QCHqpxpt9w",
  authDomain: "store-db-362f6.firebaseapp.com",
  projectId: "store-db-362f6",
  storageBucket: "store-db-362f6.appspot.com",
  messagingSenderId: "543412271833",
  appId: "1:543412271833:web:108af0fe419c78acb01cc8",
  measurementId: "G-99W32CJKDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}