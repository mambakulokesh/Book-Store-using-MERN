// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnShuaLPbAeFf2h9iNdgRZajmvj4kYj8g",
  authDomain: "book-store-app-246b3.firebaseapp.com",
  projectId: "book-store-app-246b3",
  storageBucket: "book-store-app-246b3.firebasestorage.app",
  messagingSenderId: "347366290990",
  appId: "1:347366290990:web:9f382ee7b4a31aa1a951bf"
};

// Initialize Firebase
console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
