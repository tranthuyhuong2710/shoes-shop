// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyZK0Y5OSpgnclt2YNt_8clezBEYmflKo",
  authDomain: "shoes-shop-2ab28.firebaseapp.com",
  projectId: "shoes-shop-2ab28",
  storageBucket: "shoes-shop-2ab28.appspot.com",
  messagingSenderId: "1099135738649",
  appId: "1:1099135738649:web:7c0598ad89c0cf23d71b88",
  measurementId: "G-2W5XGDHHHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);