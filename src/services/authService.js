import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

// REGISTER with email and password
export const registerUser = async (name, email, password, role) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    role,
    createdAt: serverTimestamp(),
  });

  return user;
};

// LOGIN with email and password
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

// LOGIN with Google
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  // Create a profile if this is the user's first Google login
  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email,
      role: "attendee",
      createdAt: serverTimestamp(),
    });
  }

  return user;
};

// LOGOUT
export const logoutUser = async () => {
  await signOut(auth);
};

// LISTEN for authentication changes
export const listenToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};