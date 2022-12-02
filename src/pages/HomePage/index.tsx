import React, {useContext} from "react";

import { AuthContext, ContextType } from "../../contexts/auth";

import { 
    ButtonLogout, 
    ContainerHome 
} from "./styles/styles";

export function HomePage(){

    const { logout } = useContext(AuthContext) as ContextType;

    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }

    return(
        <ContainerHome>
            <ButtonLogout onClick={handleLogout}>
                Sair
            </ButtonLogout>
        </ContainerHome>
    )
}