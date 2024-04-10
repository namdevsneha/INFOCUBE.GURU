// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "infocube007.firebaseapp.com",
  projectId: "infocube007",
  storageBucket: "infocube007.appspot.com",
  messagingSenderId: "902423233461",
  appId: "1:902423233461:web:27761850064150ab7e0ffc",
  measurementId: "G-Q9GE23655Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);