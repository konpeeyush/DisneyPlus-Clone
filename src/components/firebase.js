import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBMuWqpuhXoJyEndSJ8IXhGX77_WeucIcc",
    authDomain: "disney-clone-eee82.firebaseapp.com",
    projectId: "disney-clone-eee82",
    storageBucket: "disney-clone-eee82.appspot.com",
    messagingSenderId: "168163760150",
    appId: "1:168163760150:web:a761a53aff2d94b737fd37",
    measurementId: "G-4WM6CKMNXS"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
