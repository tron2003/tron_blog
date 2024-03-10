// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tronblog-a493b.firebaseapp.com",
  projectId: "tronblog-a493b",
  storageBucket: "tronblog-a493b.appspot.com",
  messagingSenderId: "24922897990",
  appId: "1:24922897990:web:a3cc739f596fdb36f89447"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);