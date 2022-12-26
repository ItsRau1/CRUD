import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
    padding: 0 0 3rem;
    background-color: #EAEBED;

    `

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 3rem 3rem;
    background-color: #EAEBED;

    @media (max-width: 768px) {
        height: auto;
        padding: 0 1rem 2rem;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

export const TitleField = styled.div`

`

export const ButtonNewTask = styled.button`
    border: 1px solid #fff;
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    background-color: #272c2e;
    transition: background-color 0.4s;
    height: auto;
    display: flex;
    gap: 0.5rem; 
    align-items: center;

    &:hover {
        background-color: #006989;
    };
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

export const TasksContainer = styled.div`
    background-color: #fff;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 30px;
    width: 60%;
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const TaskBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  #EAEBED;
    padding: 0.5rem 1rem;;
    border-radius: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`
export const TaskInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #262B2E;
`

export const TaskLogo = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
`

export const ButtonsBox = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

export const EditButton = styled.button`
    all: unset;

    cursor: pointer;
    border: 2px dashed #006989;
    border-radius: 2px;
    color: #006989;
    font-weight: 700;
    padding: 0px 2px;
    height: 30px;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.7);
    }
`   

export const DeletButton = styled.button`
    all: unset;

    cursor: pointer;
    border: 2px dashed #ff1f1f;
    border-radius: 2px;
    color: #ff1f1f;
    font-weight: 700;   
    padding: 0px 2px;
    transition: filter 0.2s;
    height: 30px;

    &:hover{
        filter: brightness(0.7);
    }
`

export const TextAddNewTasks = styled.div`
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    font-size: 24px;
    font-weight: 700;
    cursor: default;
`