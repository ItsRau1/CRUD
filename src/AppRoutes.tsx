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
                    <Route exact path="/" element={<Private><HomePage /> </Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}
