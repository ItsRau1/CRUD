import styled, { createGlobalStyle } from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    background-color: #EAEBED;
`

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    background-color: #DCE3E7;
`

export const LogoField = styled.div`
    cursor: pointer;
`

export const InfoField = styled.div`

`

export const ToLogout = styled.a`
    cursor: pointer;
`

export const ToAvatar = styled.div`
    cursor: pointer;
    
`

export const Logo = styled.img`
    height: 3rem;
`

export const Avatar = styled.img`
    border-radius: 50%;
    cursor: pointer;
    width: 100%;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.2);
    }
`
export const DropdownMenuContainer = styled.div`
    width: 3rem;
    height: 3rem;   
    border-radius: 50%;
`


export const RadixUIStyle = createGlobalStyle`


    button,
    fieldset,
    input {
        all: unset;
    }
    .ButtonTrigger{
        width: 100%;
        height: 100%;
    }
    .ButtonTrigger:focus {
        box-shadow: none;
    }

    .DialogOverlay {
        background-color: hsla(0, 0%, 0%, 0.439);
        position: fixed;
        inset: 0;
        animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .DialogContent {
        background-color: white;
        border-radius: 6px;
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 450px;
        max-height: 85vh;
        padding: 25px;
        animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .DialogContent:focus {
        outline: none;
    }

    .DialogTitle {
        margin: 0;
        font-weight: 500;
        color: hsl(260, 25.0%, 11.0%);
        font-size: 17px;
    }

    .DialogDescription {
        margin: 10px 0 20px;
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
        color: hsl(250, 43.0%, 48.0%);
        box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.141);
    }
    .Button.violet:hover {
        background-color: hsl(294, 5.5%, 95.3%);
    }
    .Button.violet:focus {
    box-shadow: 0 0 0 2px black;
    }
    .Button.green {
        background-color: hsl(140, 48.7%, 91.0%);
        color: hsl(153, 67.0%, 28.5%);
        cursor: pointer;
    }
    .Button.green:hover {
        background-color: hsl(141, 43.7%, 86.0%);
    }
    .Button.green:focus {
        box-shadow: 0 0 0 2px hsl(146, 38.5%, 69.0%);
    }

    .IconButton {
        font-family: inherit;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: hsl(250, 43.0%, 48.0%);
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    .IconButton:hover {
        background-color: hsl(252, 91.5%, 95.5%);
    }
    .IconButton:focus {
        box-shadow: none;
        outline: none;
    }

    .Fieldset {
        display: flex;
        gap: 20px;
        align-items: center;    
        margin-bottom: 15px;
    }

    .Label {
        font-size: 15px;
        color: hsl(250, 43.0%, 48.0%);
        width: 90px;
        text-align: right;
    }

    .Input {
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
    }
    .Input:focus {
        box-shadow: 0 0 0 2px hsl(252, 68.6%, 76.3%);
    }

    @keyframes overlayShow {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    }

    @keyframes contentShow {
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    }


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
        animation-name: slideDownAndFade;
    }
    .DropdownMenuContent[data-side='right'],
    .DropdownMenuSubContent[data-side='right'] {
        animation-name: slideLeftAndFade;
    }
    .DropdownMenuContent[data-side='bottom'],
    .DropdownMenuSubContent[data-side='bottom'] {
        animation-name: slideUpAndFade;
    }
    .DropdownMenuContent[data-side='left'],
    .DropdownMenuSubContent[data-side='left'] {
        animation-name: slideRightAndFade;
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

    @keyframes slideUpAndFade {
        from {
            opacity: 0;
            transform: translateY(2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRightAndFade {
        from {
            opacity: 0;
            transform: translateX(-2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDownAndFade {
        from {
            opacity: 0;
            transform: translateY(-2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideLeftAndFade {
        from {
            opacity: 0;
            transform: translateX(2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }


`