// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGcyeXojrc_KrcZWDRTvRUEREb8qRx_Sg",
  authDomain: "mobil-1cec5.firebaseapp.com",
  projectId: "mobil-1cec5",
  storageBucket: "mobil-1cec5.firebasestorage.app",
  messagingSenderId: "111944950875",
  appId: "1:111944950875:web:93af6e570dcc7e06a94b7e",
  measurementId: "G-BWFDW9DV03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export default app;