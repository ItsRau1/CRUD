import styled from "styled-components";

export const EditTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    width: 100%;

    background-color: #EAEBED;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 10rem;
    padding: 1rem 5rem 3rem;

    background-color: #EAEBED;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 1rem;
        padding: 0 1rem 2rem;
    }
`

export const ImageContainer = styled.div`
    height: 100%;
    padding: 5rem 0 0;
    text-align: center;
    font-weight: 700; 
    font-size: 13px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        padding: 0;
    }
`

export const PrevImage = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;

`

export const FormContainer = styled.form`
    height: 100%;
    width: 50%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    border-radius: 30px;
    background: #fff;
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FormLabelFile = styled.label`
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    transition: color 0.2s;
    width: 75%;

    &:hover{
        color: #006989;
    }
`

export const FormInputFile = styled.input`
    display: none;
`

export const FormInput = styled.input`
    width: 80%;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid transparent;
    margin: 5px 0 15px;
    transition: border-color 0.2s;

    background-color: #EAEBED;

    &:hover{
        border: 1px solid #006989;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`


export const FormField = styled.div`
    width: 100%;
    display: flex;
    justify-content: center ;
`

export const FormFieldButton = styled.div`

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
    cursor: pointer;

    &:hover {
        background-color: #006989;
    };
`

export const TitleField = styled.div`
    letter-spacing: 1px;
    color: #018CA9;
`