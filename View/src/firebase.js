import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth";
require("dotenv").config();
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA84TJhg_Mu4cm4zC6d2OFJ-lgddMN5p6Y",
  authDomain: "cvcrafts-ba444.firebaseapp.com",
  projectId: "cvcrafts-ba444",
  storageBucket: "cvcrafts-ba444.appspot.com",
  messagingSenderId: "795713231008",
  appId: "1:795713231008:web:f9772f54a2226d207911c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth()

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth,email,password)
}

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

