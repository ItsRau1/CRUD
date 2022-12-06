import React from "react";
import { TailSpin } from "react-loading-icons";
import { LoadingContainer } from "./styles/styles";

export function LoadingPage (){

    return (
        <LoadingContainer>
            <h3>Carregando</h3>
            <TailSpin stroke="#ffffff"/>
        </LoadingContainer>
    )
}   