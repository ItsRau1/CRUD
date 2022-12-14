import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import React,{useContext} from "react"

import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"

import { AuthProvider, AuthContext } from "./contexts/auth"
import { RegisterPage } from "./pages/RegisterPage"
import { LoadingPage } from "./pages/LoadingPage"
import { EditUserPage } from "./pages/EditUserPage"
import { NewTaskPage } from "./pages/NewTaskPage"
import { EditTaskPage } from "./pages/EditTaskPage"

export function AppRoutes () {
    const Private = ({children}:any)=>{
        const { authenticated, loading }:any = useContext(AuthContext);

        if(loading){
            return <LoadingPage />
        }

        if (!authenticated){
            return <Navigate to="/login"/>
        }

        return children
    }


    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />}/>
                    <Route exact path="/register" element={<RegisterPage />}/>
                    <Route exact path="/" element={<Private> <HomePage /> </Private>}/>
                    <Route exact path="/edit" element={<Private> <EditUserPage /> </Private>}/>
                    <Route exact path="/new" element={<Private> <NewTaskPage /> </Private>}/>
                    <Route exact path="/taskedit" element={<Private> <EditTaskPage /> </Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}
