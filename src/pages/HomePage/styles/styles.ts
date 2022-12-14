import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100vh;

    background-color: #EAEBED;
`

export const MainContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem 3rem;
`

export const MainHeader = styled.div`
    color: #101C20;
`

export const MainGif = styled.img`
    height: 50px;
`

export const ColloredText = styled.strong`
    color: #006989;
`
export const MainContent = styled.div`

`

export const TitleField = styled.div`

`

export const ButtonNewTask = styled.button`

`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const FormField = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
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
    padding: 1px 30px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    background-color: #272c2e;
    transition: background-color 0.4s;
    height: auto;

    &:hover {
        background-color: #006989;
    };
`

export const TasksBox = styled.div`

`