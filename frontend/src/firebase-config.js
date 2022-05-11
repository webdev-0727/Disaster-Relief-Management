// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF4aGwUHS3iY5CpXqk5ghi7ibow87zM_g",
  authDomain: "blockchain-ddedc.firebaseapp.com",
  projectId: "blockchain-ddedc",
  storageBucket: "blockchain-ddedc.appspot.com",
  messagingSenderId: "439699237581",
  appId: "1:439699237581:web:71f332d44ffb20a2a2d784",
  measurementId: "G-NBG4LBWWKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);