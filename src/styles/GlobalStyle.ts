import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sono', sans-serif;
    }
    body, html{
        height: 100%;
        width: 100%;        
    }
    body {
        background-color: #540075;
        padding: 10rem 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .field{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .field input {
        width: 100%;
        padding: 10px 20px;
        border-radius: 999999px;
        border: none;
        margin: 5px 0 15px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        border: 1px solid #fff;
        padding: 10px 20px;
        border-radius: 999999px;
        font-weight: 700;
        color: #fff;
        background-color: #000;
        transition: background 0.4s;
        margin: 20px 0;
    }
    button:hover {
        background-color: #540075;
        
    }
    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    a{
        text-decoration: none;
        color: #fff;
        transition: color 0.4s;
        font-weight: 700;
    }
    a:hover{
        color: #9c9c9c;
    }
    #container {
        text-align: center;
    }
    strong{
        color: #f4f4f4;
    }
`