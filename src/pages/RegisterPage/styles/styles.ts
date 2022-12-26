import styled from "styled-components";

export const RegisterContainer = styled.div`
    height: 100vh;
    padding: 5rem 0;

    display: flex;
    justify-content: center;
    
    text-align: center;

    background-color: #EAEBED;
`

export const AsideLabel = styled.div`
    background-color: #01A7C2;
    height: 100%;
    width: 30%;

    margin: 0 -50px 0 0;
    z-index: 99999;

    border-radius: 30px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    color: #272c2e;

    height: 100%;
    width: 30%;
    padding: 3rem 1rem 0.5rem 65px;
    border-radius: 30px;

    @media (max-width: 768px) {
        width: auto;
        padding: 2rem 2rem 5rem;
    }

    a{
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 0.75rem;
        transition: color 0.4s;
        text-align: left;

        &:hover{
            color: #007090;
        }
    }

`

export const FormTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const ImageContainer = styled.div`
    text-align: center;
    font-weight: 700; 
    font-size: 13px;
    letter-spacing: 1px;
`

export const PrevImage = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;

`
export const AvatarDefault = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 85px;
    height: 85px;
`

export const FormLabel = styled.label`

`

export const FormFileInput = styled.input`
    display: none;
`

export const FormInput = styled.input`
    width: 100%;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid transparent;
    margin: 5px 0 15px;
    transition: border-color 0.2s;

    background-color: #EAEBED;

    &:hover{
        border: 1px solid #006989;
    }
`

export const FormButton = styled.button`
    border: 1px solid #fff;
    padding: 15px 30px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    background-color: #272c2e;
    transition: background-color 0.4s;

    &:hover {
        background-color: #006989;
    };
`
export const LinkField = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 0.75rem;
    gap: 0.2rem;
`