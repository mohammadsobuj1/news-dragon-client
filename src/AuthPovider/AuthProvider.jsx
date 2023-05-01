import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebas.config';



const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const singIn = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(false)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loader,
        singIn,
        logOut,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;