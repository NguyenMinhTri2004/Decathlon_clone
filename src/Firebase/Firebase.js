import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider  , FacebookAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1_-rCXJ1gp-YQjs_979V6NcoKr_mxA9U",
  authDomain: "decathlon-clone-ce243.firebaseapp.com",
  projectId: "decathlon-clone-ce243",
  storageBucket: "decathlon-clone-ce243.appspot.com",
  messagingSenderId: "799821256964",
  appId: "1:799821256964:web:2c8156894a9e51bf50d851",
  measurementId: "G-T10S4R0LBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provierGoogle = new GoogleAuthProvider()
export const provierFacebook = new FacebookAuthProvider()
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);