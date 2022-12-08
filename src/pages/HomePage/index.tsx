import React from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import { 
    ContainerHome, 
} from "./styles/styles";

import { NavBar } from "../../components/NavBar";

export function HomePage(){

    return(
        <ContainerHome>
            <NavBar />
        </ContainerHome>
    )
};

  