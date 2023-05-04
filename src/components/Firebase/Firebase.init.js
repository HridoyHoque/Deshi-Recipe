// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9fE_W-lIu95XYda7_xKKfpl87DwgagNI",
  authDomain: "deshi-recipe-client.firebaseapp.com",
  projectId: "deshi-recipe-client",
  storageBucket: "deshi-recipe-client.appspot.com",
  messagingSenderId: "830739275949",
  appId: "1:830739275949:web:a49f4a2dfd5f0785336624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;