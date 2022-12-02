import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignOut  } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig"; 

export const AuthContext = createContext();

export const AuthProvider:any = ({children}:any) =>{
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(()=>{
        const info = localStorage.getItem("userInfo")
        if(info){
            const currentUser = JSON.parse(info)
            signInWithEmailAndPassword(currentUser.email, currentUser.password)
            navigate("/")
        }
    }, [])

    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);



    const login:any = (email:any, password:any) => {
        const infoUser = { email, password}
        signInWithEmailAndPassword(email, password)
        navigate("/")
        localStorage.setItem("userInfo", JSON.stringify(infoUser))
    }
    
    const [ signOut ] = useSignOut(auth)

    function logout () {
        signOut()
        localStorage.removeItem("userInfo")
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}