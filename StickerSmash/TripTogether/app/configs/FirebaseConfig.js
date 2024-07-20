// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSAO9huFMXZbnK5ktVh37eod7YiIriaBE",
  authDomain: "triptogether-55689.firebaseapp.com",
  projectId: "triptogether-55689",
  storageBucket: "triptogether-55689.appspot.com",
  messagingSenderId: "202598461818",
  appId: "1:202598461818:web:a1bcb6d7249e38b51c26c3",
  measurementId: "G-WM4YRRTCXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

