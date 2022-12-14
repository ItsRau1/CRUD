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
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";

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

    const register = (email:string, password:string, name:string, avatar:string) => {
        createUserWithEmailAndPassword(email, password);
        const info = {
            name: name,
            avatar: avatar,
        }
        sessionStorage.setItem("infoUsers", JSON.stringify(info))
        navigate("/login")
    }

    // Login
    
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    

    const login:(email:string, password:string, stayLogged:boolean)=>void = (email:string, password:string, stayLogged:boolean) => {
        const infoUser = { email, password }
        signInWithEmailAndPassword(email, password)
        const toEdit = sessionStorage.getItem("infoUsers")
        if (toEdit) { preEdit(toEdit) }
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
        sessionStorage.removeItem("userInfo")
        navigate("/login");
    }
    
    // Edit Profile
    
    const [ updateProfile ] = useUpdateProfile(auth)

    const [name, setName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");

    
    function preEdit (info:any) {
        const inf = JSON.parse(info)
        const name = inf.name
        const url = inf.avatar;
        edit(name, url)
        sessionStorage.removeItem("infoUsers")
    }
    
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
        navigate("/")
    }

    // New Task 

    async function newTask (userID:string, taskName:string, img:string){
        await addDoc(collection(db, userID),{
            name: taskName,
            image: img,
            timeStamp: serverTimestamp(),
        })

        navigate("/")
    };


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

        navigate("/")
    }
    
    // Return 

    return (
        <AuthContext.Provider value={{authenticated: !!user , loading, login, logout, user, register, edit, newTask, editTask, taskToChange, changeTask }}>
            {children}
        </AuthContext.Provider>
    )
}