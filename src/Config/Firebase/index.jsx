import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFQFt_3cfB1GULVJ8EMfkYZYk0dNTW59s",
    authDomain: "assignment-no-15-49fd3.firebaseapp.com",
    databaseURL: "https://assignment-no-15-49fd3-default-rtdb.firebaseio.com",
    projectId: "assignment-no-15-49fd3",
    storageBucket: "assignment-no-15-49fd3.appspot.com",
    messagingSenderId: "309223792221",
    appId: "1:309223792221:web:4f0e1e628aaa093512b7b4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {auth , database };