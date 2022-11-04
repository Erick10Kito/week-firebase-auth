import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvvysj0g08-8zHdG2ojQBPc7yUxj2NlQo",

  authDomain: "fir-auth-905ff.firebaseapp.com",

  projectId: "fir-auth-905ff",

  storageBucket: "fir-auth-905ff.appspot.com",

  messagingSenderId: "151054580775",

  appId: "1:151054580775:web:b2f75777d4d014a19e6202",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const result = signInWithPopup(auth, provider);
  return result;
};
const Logout = async () => {
  await signOut(auth);
  return document.location.reload();
};

export { auth, loginGoogle, Logout };
