import React, { useState, useContext } from "react"

import { ContextType } from "../../@types/types";

import { AuthContext } from "../../contexts/auth";

import { 
    FormButton, 
    FormContainer, 
    FormField, 
    FormInput, 
    FormLabel, 
    LinkToRegister, 
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
            <h1>Login Do Sistema</h1>
            <FormContainer onSubmit={handleSumit}>
                <FormField>
                    <FormLabel htmlFor="email">
                        E-mail
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
                        Senha
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
                        Entrar
                    </FormButton>
            </FormContainer>
            <LinkToRegister href="/register">
                Registre-se
            </LinkToRegister>
        </LoginContainer>
    )
}