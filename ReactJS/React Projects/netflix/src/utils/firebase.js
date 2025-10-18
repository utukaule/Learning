// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeGCDOR6QN1vJkZNHjRopfTFLsCV6sNwA",
  authDomain: "netflixgpt-4243b.firebaseapp.com",
  projectId: "netflixgpt-4243b",
  storageBucket: "netflixgpt-4243b.firebasestorage.app",
  messagingSenderId: "839305139997",
  appId: "1:839305139997:web:3ae002c21984ba0439b3f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();