// Import the functions you need from the SDKs you need

import { firebase,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage,uploadBytes, getDownloadURL} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmuZlTqPl24KInakGfj1PUmzQGj-ErLPY",
  authDomain: "disneyhotstarclone-b1102.firebaseapp.com",
  projectId: "disneyhotstarclone-b1102",
  storageBucket: "disneyhotstarclone-b1102.appspot.com",
  messagingSenderId: "702598551848",
  appId: "1:702598551848:web:da59e0413c168d9d20181d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const database = getDatabase(app);
 export const storage = getStorage(app);




