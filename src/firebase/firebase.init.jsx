// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_drUy7bh5EWU8KVPGJv0yyTcH2yKXDs",
  authDomain: "task-manager-c5f2a.firebaseapp.com",
  projectId: "task-manager-c5f2a",
  storageBucket: "task-manager-c5f2a.appspot.com",
  messagingSenderId: "719451550845",
  appId: "1:719451550845:web:972d2bf260f90bb2b62d14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth