import React, { createContext, useState, useEffect } from "react";

import { 
    useCreateUserWithEmailAndPassword, 
    useSignInWithEmailAndPassword, 
    useUpdateProfile, 
    useSignOut, 
} from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebaseConfig";

import { useNavigate } from "react-router-dom";

import { ContextType, taskObject } from "../@types/types";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export const AuthContext = createContext<ContextType | null>(null);

type Props = {
    children?: React.ReactNode
  };

export const AuthProvider : React.FC<Props> = ({children}) =>{

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

    const [ taskToChange, setTaskToChange ] = useState<Array<taskObject>>([])

    function editTask (task:Array<taskObject>) {
        setTaskToChange(task)
        navigate("/taskedit")
    }

    async function changeTask (userID:string, taskID:string, taskName:string, img:string) {
        await updateDoc(doc(db, userID, taskID),{
            name: taskName,
            image: img, 
            timeStamp: serverTimestamp(),
        })  

        document.location.reload()
    }
    
    // Return 

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user, register, edit, editTask, taskToChange, changeTask }}>
            {children}
        </AuthContext.Provider>
    )
}