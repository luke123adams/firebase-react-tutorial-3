// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo_RAznhfIRV_JFnVd8c4YTpNlVq1-4wY",
  authDomain: "fir-v12-tutorial.firebaseapp.com",
  projectId: "fir-v12-tutorial",
  storageBucket: "fir-v12-tutorial.appspot.com",
  messagingSenderId: "384407046305",
  appId: "1:384407046305:web:c4bd617b605781942748e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app