// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArqoeDAPoYSSCKrAMCaXnXn9dy6FA0M7I",
  authDomain: "linkedinclone-f9a76.firebaseapp.com",
  projectId: "linkedinclone-f9a76",
  storageBucket: "linkedinclone-f9a76.appspot.com",
  messagingSenderId: "1968482360",
  appId: "1:1968482360:web:f5ad575457708a836d9ecd",
  measurementId: "G-TW2C4EBE3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
