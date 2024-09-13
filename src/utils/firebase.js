// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6tR6Nwa6dkjUT2MBHFfICrSWdkvlxjM4",
  authDomain: "netflixgpt-25622.firebaseapp.com",
  projectId: "netflixgpt-25622",
  storageBucket: "netflixgpt-25622.appspot.com",
  messagingSenderId: "194145727911",
  appId: "1:194145727911:web:a164600584fc95cd4e7282",
  measurementId: "G-X8ZWGVFG7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth= getAuth();