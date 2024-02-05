// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtOSH64-HjQW0g3C-hGAvav6DvkM1KCOA",
  authDomain: "chatsac-e0a09.firebaseapp.com",
  projectId: "chatsac-e0a09",
  storageBucket: "chatsac-e0a09.appspot.com",
  messagingSenderId: "759134935160",
  appId: "1:759134935160:web:de18d9e8f08999f99d758d",
  measurementId: "G-KMLE1QKRP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//Export Database
export const db = getFirestore(app);