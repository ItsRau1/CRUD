import React, { useState, useContext } from "react"
import { NavLink } from "react-router-dom";

import { ContextType } from "../../@types/types";

import { AuthContext } from "../../contexts/auth";

import { 
    AsideLabel,
    FormButton, 
    FormContainer, 
    FormField, 
    FormInput, 
    FormTitle, 
    LinkField, 
    LoginContainer 
} from "./styles/styles";


export function LoginPage(){

    const { login } = useContext(AuthContext) as ContextType;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <LoginContainer>
            <AsideLabel></AsideLabel>
            <FormContainer onSubmit={handleSumit}>
                <FormTitle>
                    <h1>Entrar</h1>
                    <p>Venha utilizar o melhor CRUD</p>
                </FormTitle>
                <FormField>
                    <FormInput 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                    />
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
                        Entrar
                    </FormButton>
                    <LinkField>
                        <p>Não tem uma conta? </p>
                        <NavLink to="/register" title="Registre-se">
                            Registre-se
                        </NavLink>
                    </LinkField>
            </FormContainer>
        </LoginContainer>
    )
}