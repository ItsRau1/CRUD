import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Sono', sans-serif;
    }
    
    html, body{
        height: 100%;
        width: 100%;        
    }
`