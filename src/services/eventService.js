import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db, auth } from "./firebase";

// Firestore events collection
const eventsCollection = collection(db, "events");

// CREATE: Add a new event
export const createEvent = async (eventData) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("You must be logged in to create an event.");
  }

  const docRef = await addDoc(eventsCollection, {
    ...eventData,
    createdBy: user.uid,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// READ: Get all events
export const getEvents = async () => {
  const snapshot = await getDocs(eventsCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

// UPDATE: Edit an existing event
export const updateEvent = async (eventId, updatedData) => {
  const eventRef = doc(db, "events", eventId);

  await updateDoc(eventRef, updatedData);
};

// DELETE: Remove an event
export const deleteEvent = async (eventId) => {
  const eventRef = doc(db, "events", eventId);

  await deleteDoc(eventRef);
};