// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPI-iW-5HkbAXlUfNoMBMnkCZwzgTFjZg",
    authDomain: "blog-app-react-firebase.firebaseapp.com",
    projectId: "blog-app-react-firebase",
    storageBucket: "blog-app-react-firebase.appspot.com",
    messagingSenderId: "1002591716502",
    appId: "1:1002591716502:web:894cd983e1047e7b5c2eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();