// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvFEi63YQI2-I0SC8Y1ABSQX6UHkPDjU8",
    authDomain: "coffee-store-auth-80458.firebaseapp.com",
    projectId: "coffee-store-auth-80458",
    storageBucket: "coffee-store-auth-80458.appspot.com",
    messagingSenderId: "70496369312",
    appId: "1:70496369312:web:0f8880266c4f1b437ae7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;