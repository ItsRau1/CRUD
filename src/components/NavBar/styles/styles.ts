import styled, { createGlobalStyle, keyframes } from "styled-components"

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.2);

    background-color: #DCE3E7;
`

export const LogoField = styled.div`
    cursor: pointer;
`

export const InfoField = styled.div`

`

export const Logo = styled.img`
    height: 3rem;
`

export const Avatar = styled.img`
    border-radius: 50%;
    cursor: pointer;
    width: 100%;
    transition: filter 0.2s;
    border: 1px solid #000;

    &:hover{
        filter: brightness(0.2);
    }
`
export const DropdownMenuContainer = styled.div`
    width: 3rem;
    height: 3rem;   
    border-radius: 50%;
`
export const RadixField = styled.fieldset`
    all: unset;

    display: flex;
    gap: 20px;
    align-items: center;    
    margin-bottom: 15px;

`

export const RadixLabel = styled.label`
    font-size: 15px;
    color: hsl(250, 43.0%, 48.0%);
    width: 90px;
    text-align: right;
`

export const RadixInputText = styled.input`
    width: 100%;
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 15px;
    line-height: 1;
    color: hsl(250, 43.0%, 48.0%);
    box-shadow: 0 0 0 1px hsl(252, 71.0%, 83.7%);
    height: 35px;

    &:focus {
        box-shadow: 0 0 0 2px hsl(252, 68.6%, 76.3%);
    }
`

export const RadixAvatarToEdit = styled.img`
    width: 6rem;
    height: 6rem;
`

export const RadixFieldAvatar = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`

export const RadixLabelToAvatar = styled.label`
    background-color: grey;
`

export const RadixInputImg = styled.input`

`

export const AvatarDefault = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    
    transition: background-color 0.2s;

    &:hover{
        background-color: hsla(0, 0%, 0%, 0.141);
    }
`

    // KeyFrames of Radix UI
    
const slideUpAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`
const slideRightAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

const slideDownAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(-2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const slideLeftAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`


// Styles of Drop Down Menu Radix UI

export const RadixUIStyle = createGlobalStyle`

.DropdownMenuContent,
    .DropdownMenuSubContent {
        min-width: 220px;
        background-color: white;
        border-radius: 6px;
        padding: 5px;
        box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
        animation-duration: 400ms;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;
    }
    .DropdownMenuContent[data-side='top'],
    .DropdownMenuSubContent[data-side='top'] {
        animation-name: ${slideDownAndFade};
    }
    .DropdownMenuContent[data-side='right'],
    .DropdownMenuSubContent[data-side='right'] {
        animation-name: ${slideLeftAndFade};
    }
    .DropdownMenuContent[data-side='bottom'],
    .DropdownMenuSubContent[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
    }
    .DropdownMenuContent[data-side='left'],
    .DropdownMenuSubContent[data-side='left'] {
        animation-name: ${slideRightAndFade};
    }
    
    .DropdownMenuItem,
    .DropdownMenuCheckboxItem,
    .DropdownMenuRadioItem,
    .DropdownMenuSubTrigger {
        font-size: 13px;
        line-height: 1;
        color: var(--violet11);
        border-radius: 3px;
        display: flex;
        align-items: center;
        height: 25px;
        padding: 0 5px;
        position: relative;
        padding-left: 25px;
        user-select: none;
        outline: none;
    }
    .DropdownMenuSubTrigger[data-state='open'] {
        background-color: var(--violet4);
        color: var(--violet11);
    }
    .DropdownMenuItem[data-disabled],
    .DropdownMenuCheckboxItem[data-disabled],
    .DropdownMenuRadioItem[data-disabled],
    .DropdownMenuSubTrigger[data-disabled] {
        color: var(--mauve8);
        pointer-events: none;
    }
    .DropdownMenuItem[data-highlighted],
    .DropdownMenuCheckboxItem[data-highlighted],
    .DropdownMenuRadioItem[data-highlighted],
    .DropdownMenuSubTrigger[data-highlighted] {
        background-color: var(--violet9);
        color: var(--violet1);
    }
    
    .DropdownMenuLabel {
        padding-left: 25px;
        font-size: 12px;
        line-height: 25px;
        color: var(--mauve11);
    }
    
    .DropdownMenuSeparator {
        height: 1px;
        background-color: var(--violet6);
        margin: 5px;
    }
    
    .DropdownMenuItemIndicator {
        position: absolute;
        left: 0;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .DropdownMenuArrow {
        fill: white;
    }
    
    .IconButton {
        font-family: inherit;
        border-radius: 100%;
        height: 35px;
        width: 35px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--violet11);
        background-color: white;
        box-shadow: 0 2px 10px var(--blackA7);
    }
    .IconButton:hover {
        background-color: var(--violet3);
    }
    .IconButton:focus {
        box-shadow: 0 0 0 2px black;
    }
    
    .RightSlot {
        margin-left: auto;
        padding-left: 20px;
        color: var(--mauve11);
    }
    [data-highlighted] > .RightSlot {
        color: white;
    }
    [data-disabled] .RightSlot {
        color: var(--mauve8);
    }


`