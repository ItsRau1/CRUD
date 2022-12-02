import React, { useState } from "react"
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


export function RegisterPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);


    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        navigate("/login")
    }


    return (
        <RegisterContainer>
            <h1>Se Registre</h1>
            <FormRegister onSubmit={handleSumit}>
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
                        Registrar-se
                    </FormButton>
            </FormRegister>
            <LinkToLogin href="/login">
                Voltar ao Login
            </LinkToLogin>
        </RegisterContainer>
    )
}