// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtpzljuGm5Z-Wr-UVYddVlbgtW3jPQV8s",
  authDomain: "get-stuff-done-fast.firebaseapp.com",
  projectId: "get-stuff-done-fast",
  storageBucket: "get-stuff-done-fast.appspot.com",
  messagingSenderId: "352858230673",
  appId: "1:352858230673:web:de4ebe7f5523cdc5de5430",
  measurementId: "G-B2NCCJ88K2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)