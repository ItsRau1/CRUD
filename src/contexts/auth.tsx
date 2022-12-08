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

    const register = (email:string, password:string, name:string) => {
        createUserWithEmailAndPassword(email, password);
        setName(name) // Register Flow
        navigate("/login")
    }

    // Login
    
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    

    const login:(email:string, password:string)=>void = (email:string, password:string) => {
        const infoUser = { email, password }
        signInWithEmailAndPassword(email, password)
        localStorage.setItem("userInfo", JSON.stringify(infoUser))
        edit(name) // Resgister Flow
        navigate("/")

    }

    // Logout
    
    const [ signOut ] = useSignOut(auth)
    
    const logout = () => {
        signOut()
        localStorage.removeItem("userInfo")
        navigate("/login");
    }
    
    // Edit Profile
    
    const [ updateProfile ] = useUpdateProfile(auth)

    const [name, setName] = useState<string>("");
    
    
    function edit (name:string, url?:string) {
        
        const userUpdated = ()=>{
            if(url){
                return {
                    displayName: name,
                    photoURL: url,
                }
            } else {
                return {
                    displayName: name,
                }
            }
        }

        updateProfile(userUpdated());
    }
    
    // Return 

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user, register, edit }}>
            {children}
        </AuthContext.Provider>
    )
}