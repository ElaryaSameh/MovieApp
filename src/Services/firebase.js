// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxf-VOshqqTUhQKtJ4u13uZM1LvTMbi0o",
  authDomain: "day-2-57ef7.firebaseapp.com",
  projectId: "day-2-57ef7",
  storageBucket: "day-2-57ef7.firebasestorage.app",
  messagingSenderId: "566950679484",
  appId: "1:566950679484:web:6c321443721bb433f551b9",
  measurementId: "G-Q08Y1W8TPP"
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
// const ANALYTICS = getAnalytics(app);
const AUTH = getAuth(APP);

export { AUTH };