import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM-KsPL5_Yq5aE8SRlslFd_GHhqT2Bq5A",
  authDomain: "react-login-ae05d.firebaseapp.com",
  projectId: "react-login-ae05d",
  storageBucket: "react-login-ae05d.appspot.com",
  messagingSenderId: "488946797491",
  appId: "1:488946797491:web:42a378e8c07c041d9a59c6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);