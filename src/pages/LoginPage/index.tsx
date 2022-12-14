// Utils
import React, { useState, useContext } from "react"
import { NavLink } from "react-router-dom";

// Components
import { 
    AsideLabel,
    FormButton, 
    FormContainer, 
    FormField, 
    FormInput, 
    FormTitle, 
    LinkField, 
    LoginContainer, 
    StayLoggedCheckBox, 
    StayLoggedContainer,
    StayLoggedText
} from "./styles/styles";

// Context
import { ContextType } from "../../@types/types";

import { AuthContext } from "../../contexts/auth";

export function LoginPage(){

    const { login } = useContext(AuthContext) as ContextType;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [logged, setLogged] = useState<boolean>(false)

    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        login(email, password, logged);
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
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Sua Senha"
                        required
                    />
                    <StayLoggedContainer>
                        <StayLoggedCheckBox 
                            type="checkbox" 
                            onChange={() => setLogged(!logged)}
                            id="stayLogged"
                        />
                        <StayLoggedText htmlFor="stayLogged">Manter-se conectado</StayLoggedText>
                    </StayLoggedContainer>
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