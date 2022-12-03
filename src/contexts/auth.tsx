import React, { createContext, useState, useEffect } from "react";

import { 
    useCreateUserWithEmailAndPassword, 
    useSignInWithEmailAndPassword, 
    useUpdateProfile, 
    useSignOut, 
} from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

import { useNavigate } from "react-router-dom";

import { ContextType } from "../@types/types";

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider : React.FC<React.ReactNode> = ({children}) =>{ // Resolve Children Type //

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

    // Register

    const [createUserWithEmailAndPassword, ] =
    useCreateUserWithEmailAndPassword(auth);

    const register = (email:string, password:string) => {
        createUserWithEmailAndPassword(email, password);
        navigate("/login")
    }

    // Login

    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


    const login:(email:string, password:string)=>void = (email:string, password:string) => {
        const infoUser = { email, password}
        signInWithEmailAndPassword(email, password)
        navigate("/")
        localStorage.setItem("userInfo", JSON.stringify(infoUser))
    }

    // Logout
    
    const [ signOut ] = useSignOut(auth)
    
    const logout = () => {
        signOut()
        localStorage.removeItem("userInfo")
        navigate("/login");
    }

    // Update Profile

    const [ updateProfile ] = useUpdateProfile(auth)

    
    const update = () => {
        const userUpdated = {
            displayName: "Raul",
            photoURL: "https://images.tcdn.com.br/img/img_prod/106020/adesivo_independente_futebol_e_samba_2979_1_20201006221403.jpg"
        }
        updateProfile(userUpdated);
    }
    
    // Return 

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user, register, update }}>
            {children}
        </AuthContext.Provider>
    )
}