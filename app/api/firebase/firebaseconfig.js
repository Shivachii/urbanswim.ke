// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8SKU5LcCjpX085z98v0yMEY7BiHxFaI",
  authDomain: "urbaneswimke-f15a1.firebaseapp.com",
  projectId: "urbaneswimke-f15a1",
  storageBucket: "urbaneswimke-f15a1.appspot.com",
  messagingSenderId: "914270415834",
  appId: "1:914270415834:web:c829715562d1446b72eee3",
  measurementId: "G-0PG166MHGX"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth, app, analytics}