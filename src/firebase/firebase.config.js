// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBalOsN6XF5YqU1Y6Ci_Zm1ZyDc6womvQM",
  authDomain: "japanese-chef-recipe-auth.firebaseapp.com",
  projectId: "japanese-chef-recipe-auth",
  storageBucket: "japanese-chef-recipe-auth.appspot.com",
  messagingSenderId: "909946443235",
  appId: "1:909946443235:web:7371ad887fc9efb5acfcd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;