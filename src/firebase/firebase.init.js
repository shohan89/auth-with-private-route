// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfgmNBVCAq0f_0Cg7zrXAVDacUeKmarfY",
  authDomain: "auth-with-private-route-f5f63.firebaseapp.com",
  projectId: "auth-with-private-route-f5f63",
  storageBucket: "auth-with-private-route-f5f63.firebasestorage.app",
  messagingSenderId: "896045927102",
  appId: "1:896045927102:web:5c10132240adace9a7acef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;