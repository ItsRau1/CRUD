import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
    }
    
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #006989;
    }

    html, body{
        height: 100%;
        width: 100%;        
        -webkit-font-smoothing: antialiased;
    }
    #root, #myRoot {
        height: 100%;
    }
`