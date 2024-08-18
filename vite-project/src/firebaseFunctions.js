// src/services/firebaseFunctions.js
import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { db } from "./firebase";

export const addOrder = async (order) => {
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, { ...order, timestamp: Timestamp.now() });
};

export const getUserOrders = async (userId) => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), orderId: doc.id }));
};

export const submitFeedback = async (feedback) => {
    const feedbacksCollection = collection(db, "feedbacks");
    await addDoc(feedbacksCollection, { ...feedback, date: Timestamp.now() });
};

export const getFeedbacks = async () => {
    const feedbacksCollection = collection(db, "feedbacks");
    const querySnapshot = await getDocs(feedbacksCollection);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), feedbackId: doc.id }));
};
