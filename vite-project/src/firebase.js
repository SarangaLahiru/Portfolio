// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDqZ7IGpZpUMXDMXwkjWXY7PSXQ9tQUlQ",
    authDomain: "portf-cef98.firebaseapp.com",
    projectId: "portf-cef98",
    storageBucket: "portf-cef98.appspot.com",
    messagingSenderId: "854929292077",
    appId: "1:854929292077:web:35124da2dba23e18d871a4",
    measurementId: "G-9ZHBZN58X3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);



const signInWithGoogle = async () => {


    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userDoc = doc(db, `users/${user.uid}`);
        const userDocSnap = await getDoc(userDoc);

        if (!userDocSnap.exists()) {
            await setDoc(userDoc, { email: user.email, name: user.displayName, avatar: user.photoURL });
        }

    } catch (error) {
        console.error("Error signing in with Google:", error);

    }
};

const signOutUser = () => signOut(auth);



export { auth, db, signInWithGoogle, signOutUser, storage };

