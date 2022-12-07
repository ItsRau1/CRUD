import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

import { 
    AsideLabel,
    FormButton, 
    FormField, 
    FormInput, 
    FormLabel, 
    FormRegister, 
    FormTitle, 
    LinkField, 
    RegisterContainer 
} from "./styles/styles";

import { AuthContext } from "../../contexts/auth";

import { ContextType } from "../../@types/types";


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
            <AsideLabel></AsideLabel>
            <FormRegister onSubmit={handleSumit}>
                <FormTitle>
                    <h1>Registre-se</h1>
                    <p>Venha utilizar o melhor CRUD</p>
                </FormTitle>
                <FormField>
                    <FormInput
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        title="Insira seu nome"
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        title="Insira seu E-mail"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        title="Insira sua senha"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Sua Senha"
                        required
                    />
                </FormField>

                    <FormButton type="submit" title="Registrar-se">
                        Registrar-se
                    </FormButton>   
                    <LinkField>
                        <NavLink to="/login" title="Login">
                            Voltar ao Login
                        </NavLink>
                    </LinkField>
            </FormRegister>
        </RegisterContainer>
    )
}