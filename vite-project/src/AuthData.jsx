// AuthData.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle, signOutUser } from './firebase';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
