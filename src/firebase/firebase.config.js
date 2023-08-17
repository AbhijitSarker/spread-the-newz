// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAAkqACkEWz1s5TlHykrLm4psYjoEY6m0",
    authDomain: "spread-the-newz.firebaseapp.com",
    projectId: "spread-the-newz",
    storageBucket: "spread-the-newz.appspot.com",
    messagingSenderId: "13202001802",
    appId: "1:13202001802:web:810a37864bedb5d2af8273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;