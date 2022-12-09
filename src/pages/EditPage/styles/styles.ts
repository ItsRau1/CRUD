import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerEdit = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    background-color: #EAEBED;
`

export const MainEdit = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EditBox = styled.div`
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.2);
`

export const FieldTitle = styled.div`
    letter-spacing: 1px;
    color: #018CA9;
`

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const FieldInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    letter-spacing: 1px;
    color: #5295AA;
`
export const EditInput = styled.input`
    all: unset;

    padding: 15px 15px;
    border: 1px solid #01A7C2;
    background-color: #EAEBED;
    font-size: 15px;
    border-radius: 8px;
    transition: outline 0.2s, border-color 0.2s;
    margin: 0 0 32px 0;
    color: #000;

    &:focus{
        outline: 1px solid #01A7C2;
    }

    &:hover{
        border: 1px solid #006989;
    }
    
    
    `

export const FieldButton = styled.div`
    display: flex;
    justify-content: center;
    `

    export const EditButton = styled.button`
        all: unset;
    
        font-weight: 700;
        letter-spacing: 1px;
        color: #FFF;
        background-color: #018CA9;
        border-radius: 8px;
        padding: 15px 40px;  
        transition: filter 0.3s ;
    
        &:hover{
            filter: brightness(0.7);
        }
    `
// Key Frames Radix UI

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

// Styles Radix UI

export const StylesRadixUI = createGlobalStyle`
button {
  all: unset;
}

.AlertDialogOverlay {
  background-color: hsla(0, 0%, 0%, 0.439);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.AlertDialogContent {
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.AlertDialogContent:focus {
  outline: none;
}

.AlertDialogTitle {
  margin: 0;
  color: hsl(260, 25.0%, 11.0%);
  font-size: 17px;
  font-weight: 500;
}

.AlertDialogDescription {
  margin-bottom: 20px;
  color: hsl(252, 4.0%, 44.8%);
  font-size: 15px;
  line-height: 1.5;
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.violet {
  background-color: white;
  color: #18AFC8;
  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.141);
}
.Button.violet:hover {
  background-color: hsl(294, 5.5%, 95.3%);
}
.Button.violet:focus {
  box-shadow: 0 0 0 2px black;
}
.Button.red {
  background-color: hsl(360, 97.9%, 94.8%);
  color: hsl(358, 65.0%, 48.7%);
}
.Button.red:hover {
  background-color: hsl(360, 90.2%, 91.9%);
}
.Button.red:focus {
  box-shadow: 0 0 0 2px hsl(359, 74.2%, 81.7%);
}
.Button.mauve {
  background-color: hsl(289, 4.7%, 93.3%);
  color: hsl(252, 4.0%, 44.8%);
}
.Button.mauve:hover {
  background-color: hsl(283, 4.4%, 91.3%);
}
.Button.mauve:focus {
  box-shadow: 0 0 0 2px hsl(271, 3.9%, 86.3%);
}

`
