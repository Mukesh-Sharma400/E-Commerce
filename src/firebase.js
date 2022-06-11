// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXDq_1-m5RycNiljNM2mtezTVVmr8d66g",
  authDomain: "ecommerce-webapp-c76ae.firebaseapp.com",
  projectId: "ecommerce-webapp-c76ae",
  storageBucket: "ecommerce-webapp-c76ae.appspot.com",
  messagingSenderId: "732793424263",
  appId: "1:732793424263:web:11583fc3f3a5778ab22b22",
  measurementId: "G-GNMGQ9K044",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
