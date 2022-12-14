// Utils
import React from "react";

// Components
import { LoadingContainer } from "./styles/styles";

// Assets
import { TailSpin } from "react-loading-icons";


export function LoadingPage (){

    return (
        <LoadingContainer>
            <h3>Carregando</h3>
            <TailSpin stroke="#ffffff"/>
        </LoadingContainer>
    )
}   