import styled from "styled-components";

export const RegisterContainer = styled.div`
    text-align: center;
`

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const FormLabel = styled.label`

`

export const FormInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    border-radius: 999999px;
    border: none;
    margin: 5px 0 15px;
`

export const FormButton = styled.button`
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 999999px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    transition: background 0.4s;
    margin: 20px 0;

    &:hover {
        background-color: #540075;
    };
`

export const LinkToLogin = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    transition: color 0.4s;

    &:hover{
        color: #9c9c9c;
    }
`