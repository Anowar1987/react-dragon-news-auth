// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm-MSWRwplrgRRRVeYt1ysJdFG3ywuJIk",
  authDomain: "react-dragon-news-auth-fcf81.firebaseapp.com",
  projectId: "react-dragon-news-auth-fcf81",
  storageBucket: "react-dragon-news-auth-fcf81.appspot.com",
  messagingSenderId: "251119205136",
  appId: "1:251119205136:web:d80358307621b6ed2f4395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;