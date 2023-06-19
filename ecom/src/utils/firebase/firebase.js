import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlVwGm55HspO5grynruFHO6GYjP7o6qOY",
  authDomain: "react-ecom-b639f.firebaseapp.com",
  projectId: "react-ecom-b639f",
  storageBucket: "react-ecom-b639f.appspot.com",
  messagingSenderId: "745761902542",
  appId: "1:745761902542:web:2225670cec9ba7138ee59f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserAccount = async (userAuth) => {
  try {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    }
    return userDocRef;

  } catch (error) {
    console.log(error);
  }
}