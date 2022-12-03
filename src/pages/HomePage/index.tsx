import React, {useContext} from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import { 
    ButtonLogout, 
    ContainerHome 
} from "./styles/styles";

export function HomePage(){

    const { logout, update } = useContext(AuthContext) as ContextType;

    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }

    const handleUpdate = (e:React.SyntheticEvent) => {
        e.preventDefault();
        update();
    }

    return(
        <ContainerHome>
            <ButtonLogout onClick={handleLogout}>
                Sair
            </ButtonLogout>
            <ButtonLogout onClick={handleUpdate}>
                Atualizar
            </ButtonLogout>
        </ContainerHome>
    )
}