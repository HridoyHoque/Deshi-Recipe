import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, SetUser] = useState(null)

    const SignUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
              SetUser(currentUser)
          })
          return () => {
              return unsubscribe()
          }
         }, [])

         const AuthInfo = {
            user,
            SignUpUser
         }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;