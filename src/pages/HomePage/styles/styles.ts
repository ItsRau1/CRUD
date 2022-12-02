import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const ButtonLogout = styled.button`
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
    }
`