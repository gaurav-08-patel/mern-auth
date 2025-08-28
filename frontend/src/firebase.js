// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-911af.firebaseapp.com",
  projectId: "mern-auth-911af",
  storageBucket: "mern-auth-911af.firebasestorage.app",
  messagingSenderId: "276016203034",
  appId: "1:276016203034:web:f697401c2d7f1f38b2d8a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);