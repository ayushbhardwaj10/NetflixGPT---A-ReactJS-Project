// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUom_XYO2MWlXzr1E57mSRQRG6KNkFUL4",
  authDomain: "netflixgpt-proj.firebaseapp.com",
  projectId: "netflixgpt-proj",
  storageBucket: "netflixgpt-proj.appspot.com",
  messagingSenderId: "667807139338",
  appId: "1:667807139338:web:c54473b389f6cf5deb41f3",
  measurementId: "G-HR3SDXP49R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize auth
export const auth = getAuth();
