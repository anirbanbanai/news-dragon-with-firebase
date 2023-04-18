// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgx9NzS1dhw0L_W3_EZEVpaqeVyNpyd8w",
  authDomain: "the-news-dragon-96934.firebaseapp.com",
  projectId: "the-news-dragon-96934",
  storageBucket: "the-news-dragon-96934.appspot.com",
  messagingSenderId: "615240025444",
  appId: "1:615240025444:web:2124c59e4efc7451bf6671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}