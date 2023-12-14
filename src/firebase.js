// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC70fXdILk5poHKtAtp-H9KAejNtl8uGQ",
  authDomain: "clones-db3f2.firebaseapp.com",
  projectId: "clones-db3f2",
  storageBucket: "clones-db3f2.appspot.com",
  messagingSenderId: "942334598756",
  appId: "1:942334598756:web:ed8397a093f1aa992a0971",
  measurementId: "G-LHJ23K415E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);