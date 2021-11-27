// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcByYLMSibiLvEaHbJKbox8dYuCn0BZVI",
  authDomain: "appchat-eee74.firebaseapp.com",
  projectId: "appchat-eee74",
  storageBucket: "appchat-eee74.appspot.com",
  messagingSenderId: "320257363343",
  appId: "1:320257363343:web:03381a6b48fc06e62f8ffa",
  measurementId: "G-0LH4FKCMHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = app.auth();
export { app, analytics, auth };