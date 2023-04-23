// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtUlJYfYuG7pqEOnxjqHbkYG7FGo__jBg',
  authDomain: 'blog-project-using-react.firebaseapp.com',
  projectId: 'blog-project-using-react',
  storageBucket: 'blog-project-using-react.appspot.com',
  messagingSenderId: '100879503113',
  appId: '1:100879503113:web:f856479c8ad9bd0e20cdd8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
