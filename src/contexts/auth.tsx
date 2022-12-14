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
        const infoTemporary = sessionStorage.getItem("userInfo")

        if(info){
            const currentUser = JSON.parse(info)
            signInWithEmailAndPassword(currentUser.email, currentUser.password)
            navigate("/")
        } else if (infoTemporary){
            const currentUser = JSON.parse(infoTemporary)
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
    

    const login:(email:string, password:string, stayLogged:boolean)=>void = (email:string, password:string, stayLogged:boolean) => {
        const infoUser = { email, password }
        signInWithEmailAndPassword(email, password)
        edit(name) // Resgister Flow
        if (stayLogged === true) {
            localStorage.setItem("userInfo", JSON.stringify(infoUser))
        } else {
            sessionStorage.setItem("userInfo", JSON.stringify(infoUser))
        }
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
        document.location.reload();
    }

    // Edit Task 

    const [ taskToChange, setTaskToChange ] = useState([])

    function editTask (task) {
        setTaskToChange(task)
        navigate("/taskedit")
    }
    
    // Return 

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user, register, edit, editTask, taskToChange }}>
            {children}
        </AuthContext.Provider>
    )
}