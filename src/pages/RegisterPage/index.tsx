import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth";

import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";


export function RegisterPage(){

    const navigate = useNavigate();

    const {authenticated, login, setUser} = useContext<any>(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);


    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        navigate("/login")
    }


    return (
        <div id="container">
            <h1>Se Registre</h1>
            <form onSubmit={handleSumit}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Sua Senha"
                    />
                </div>
                    <button type="submit">
                        Entrar
                    </button>
            </form>
            <a href="/login">
                Voltar ao Login
            </a>
        </div>
    )
}