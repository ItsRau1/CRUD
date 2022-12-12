import React, { useContext } from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import { 
    ColloredText,
    ContainerHome, MainContainer, MainGif, MainHeader, 
} from "./styles/styles";

import { NavBar } from "../../components/NavBar";

import HiGif from "./../../assets/hi.gif"

export function HomePage(){

    const { user } = useContext(AuthContext) as ContextType

    const userName = user?.user.displayName


    return(
        <ContainerHome>
            <NavBar />
            <MainContainer>
                <MainHeader>
                    <h1>Ola <ColloredText>{userName}    </ColloredText> <MainGif src={HiGif}/> <br></br> Como vai? Espero que bem.</h1>
                </MainHeader>
            </MainContainer>
        </ContainerHome>
    )
};

  