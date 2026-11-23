import {
  doc,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db, auth } from "./firebase";

// Register the current user for an event
export const registerForEvent = async (event) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("You must be logged in to register.");
  }

  const registrationId = `${user.uid}_${event.id}`;

  // Check the user's existing registrations
  const existingRegistrations = await getUserRegistrations();

  const alreadyRegistered = existingRegistrations.some(
    (registration) => registration.eventId === event.id
  );

  if (alreadyRegistered) {
    throw new Error("You are already registered for this event.");
  }

  // Create a registration with a predictable document ID
  const registrationRef = doc(
    db,
    "registrations",
    registrationId
  );

  await setDoc(registrationRef, {
    userId: user.uid,
    eventId: event.id,
    eventTitle: event.title,
    eventDate: event.date,
    eventLocation: event.location,
    createdAt: serverTimestamp(),
  });

  return registrationId;
};

// Get registrations belonging to the current user
export const getUserRegistrations = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("You must be logged in to view registrations.");
  }

  const registrationsQuery = query(
    collection(db, "registrations"),
    where("userId", "==", user.uid)
  );

  const snapshot = await getDocs(registrationsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};