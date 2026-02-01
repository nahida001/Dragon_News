// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBynfuoRCc_9FjPlbYH3GTkNAvu77bQIEw",
  authDomain: "dragon-news-1b0bd.firebaseapp.com",
  projectId: "dragon-news-1b0bd",
  storageBucket: "dragon-news-1b0bd.firebasestorage.app",
  messagingSenderId: "746635083451",
  appId: "1:746635083451:web:23e8b3684e7e504e12f39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;