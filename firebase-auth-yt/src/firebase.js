// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1qyqPO3nWuXdDR5OHhr0nHhpbfjyRcps",
  authDomain: "react-firebase-auth-dev-a473d.firebaseapp.com",
  projectId: "react-firebase-auth-dev-a473d",
  storageBucket: "react-firebase-auth-dev-a473d.appspot.com",
  messagingSenderId: "147056809349",
  appId: "1:147056809349:web:3481b82f2fc2664dfba0ec",
  measurementId: "G-1DSGXCFYH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);