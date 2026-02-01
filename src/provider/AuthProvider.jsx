import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import app from '../firbase/firbase.config';
import { useLocation } from 'react-router';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
     const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser)
      setLoading(false)
       })
       return ()=>{
        unsubscribe();
       }
    },[])
    const authData={
        user,
        setuser,
        createUser,
        logOut,
        singIn,
        loading,
        setLoading,
        updateUser,
    }
    return  <AuthContext value={authData}>
            {children}
        </AuthContext>
};

export default AuthProvider;