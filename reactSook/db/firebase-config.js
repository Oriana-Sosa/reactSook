// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3iay1YGy949bm7yl584revZMkxYqf2vU",
    authDomain: "sook-fbfb7.firebaseapp.com",
    projectId: "sook-fbfb7",
    storageBucket: "sook-fbfb7.appspot.com",
    messagingSenderId: "454602891698",
    appId: "1:454602891698:web:e6ce5e9bafbc2bfd1284ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)