 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGt_UFRt2_ri_ANVsnJKM73FdKnXGba_I",
  authDomain: "storefront-e9f7d.firebaseapp.com",
  databaseURL: "https://storefront-e9f7d-default-rtdb.firebaseio.com",
  projectId: "storefront-e9f7d",
  storageBucket: "storefront-e9f7d.appspot.com",
  messagingSenderId: "417836230642",
  appId: "1:417836230642:web:c5b788b9647e6ec4e0ad6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};