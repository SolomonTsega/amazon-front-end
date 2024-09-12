import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC60_SUlzkkObLCheGH2x_xX0dxcXCkwhs",
  authDomain: "clone-39a6c.firebaseapp.com",
  projectId: "clone-39a6c",
  storageBucket: "clone-39a6c.appspot.com",
  messagingSenderId: "453858528524",
  appId: "1:453858528524:web:b766f8ce06b03c89060d29",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = app.firestore();
