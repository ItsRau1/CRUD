import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

import { 
    FormButton, 
    FormField, 
    FormInput, 
    FormLabel, 
    FormRegister, 
    LinkToLogin, 
    RegisterContainer 
} from "./styles/styles";

import { AuthContext } from "../../contexts/auth";

import { ContextType } from "../../@types/types";
import axios from "axios";


export function RegisterPage(){

    const { register } = useContext(AuthContext) as ContextType;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        register(email, password, name);
    }

    return (
        <RegisterContainer>
            <h1>Se Registre</h1>
            <FormRegister onSubmit={handleSumit}>
                <FormField>
                    <FormLabel htmlFor="name">
                        Seu nome
                    </FormLabel>
                    <FormInput
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    onChange={(e)=> setName(e.target.value)}
                    />
                </FormField>
                <FormField>
                    <FormLabel htmlFor="email">
                        Seu e-mail
                    </FormLabel>
                    <FormInput 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                    />
                </FormField>
                <FormField>
                    <FormLabel htmlFor="password">
                        Sua senha
                    </FormLabel>
                    <FormInput 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Sua Senha"
                    />
                </FormField>
                    <FormButton type="submit">
                        Registrar-se
                    </FormButton>
            </FormRegister>
            <LinkToLogin href="/login">
                Voltar ao Login
            </LinkToLogin>
        </RegisterContainer>
    )
}