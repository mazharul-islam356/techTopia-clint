// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdLBhtZhn6lRMpe87X8H7YOYzdU24mEoo",
  authDomain: "assingment-10-3f93f.firebaseapp.com",
  projectId: "assingment-10-3f93f",
  storageBucket: "assingment-10-3f93f.appspot.com",
  messagingSenderId: "1049477680674",
  appId: "1:1049477680674:web:1deaa9e94486bc042c847b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;