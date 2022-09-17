// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgXO1mNEHwRevdJEpe_yQdS1-aQhrqXV4",
  authDomain: "ingredeck.firebaseapp.com",
  projectId: "ingredeck",
  storageBucket: "ingredeck.appspot.com",
  messagingSenderId: "508796918942",
  appId: "1:508796918942:web:4fd8607985d1f477a5af8f",
  measurementId: "G-X7ZBB9M468",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const authentication = getAuth(app);
