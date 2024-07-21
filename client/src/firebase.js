// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-a5635.firebaseapp.com",
  projectId: "mern-project-a5635",
  storageBucket: "mern-project-a5635.appspot.com",
  messagingSenderId: "1017654885960",
  appId: "1:1017654885960:web:813dce987a517c4b81e27d",
  measurementId: "G-H51W69DZKN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
