// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp67iXT_6kw1mVylwb3pmhXXsEVt6yeaI",
  authDomain: "calico3-caf42.firebaseapp.com",
  projectId: "calico3-caf42",
  storageBucket: "calico3-caf42.firebasestorage.app",
  messagingSenderId: "56210962266",
  appId: "1:56210962266:web:cf8085faae3f7440d1e563",
  databaseURL: "https://calico3-caf42-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
