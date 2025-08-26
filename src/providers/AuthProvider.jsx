import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create an observer for auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("🚀 ~ AuthProvider ~ currentUser:", currentUser)
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[]);


    const authInfo = {
        user,
        createUser,
        signInUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;