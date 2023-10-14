// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRY-ckFnxmzNXdpSN6zkLGaeAgqWYndi0",
  authDomain: "doyoulist-4362c.firebaseapp.com",
  projectId: "doyoulist-4362c",
  storageBucket: "doyoulist-4362c.appspot.com",
  messagingSenderId: "162314491661",
  appId: "1:162314491661:web:c7d01323227384232ec244",
  measurementId: "G-N2PZRGCP95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
