import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const auth = getAuth(app);

export const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsSignedIn(true);
        try {
          const { uid, displayName, email, photoURL } = user;
          setUserDoc({
            uid,
            displayName,
            email,
            photoURL,
          });
        } catch (err) {
          console.log("Error fetching user data:", err);
        }
      } else {
        setIsSignedIn(false);
        setUserDoc(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { userDoc, isSignedIn };
};

export const signUp = async (email, password, name) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;

    await updateProfile(user, {
      displayName: name,
    });

    // await setDoc(doc(db, "users", user.uid), {
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: name,
    // });
    console.log("im here!");

    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const logoutUser = async () => {
  
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

export default app;
