import React, { createContext, useState, useEffect, ChildContextProvider, PropsWithChildren, ReactElement } from "react";

import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignOut  } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig"; 
import { UserCredential } from "firebase/auth";

export type ContextType = {
    authenticated?: boolean;
    loading?: boolean;
    login: (email:string, password:string)=>void;
    logout: ()=>void;
    user?: UserCredential | undefined;
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider : React.FC<React.ReactNode> = ({children}) =>{ // Resolve Children Type
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<String | null>(null);

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



    const login:(email:string, password:string)=>void = (email:string, password:string) => {
        const infoUser = { email, password}
        signInWithEmailAndPassword(email, password)
        navigate("/")
        localStorage.setItem("userInfo", JSON.stringify(infoUser))
    }
    
    const [ signOut ] = useSignOut(auth)

    const logout = () => {
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