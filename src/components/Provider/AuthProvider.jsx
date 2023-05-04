import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)
const GithubProvider = new GithubAuthProvider();
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, SetUser] = useState(null)

    const SignUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LoginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email, password)
    }

    const SignInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const SignInWithGithub = () => {
     return signInWithPopup(auth, GithubProvider)
    }

    const LogOut = () => {
      return signOut(auth) 
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
            SignUpUser,
            LoginUser,
            SignInWithGoogle,
            SignInWithGithub,
            LogOut
         }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;