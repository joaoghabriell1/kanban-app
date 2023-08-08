import { getAuth } from "firebase/auth/cordova";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiZRO1oQWtt659vxaPelDzJ69-CFIrng0",
  authDomain: "react-ho-b122c.firebaseapp.com",
  databaseURL: "https://react-ho-b122c-default-rtdb.firebaseio.com",
  projectId: "react-ho-b122c",
  storageBucket: "react-ho-b122c.appspot.com",
  messagingSenderId: "370703780349",
  appId: "1:370703780349:web:5c9eb66bc6212281d6b194",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
