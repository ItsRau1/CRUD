import { PencilSimpleLine, SignOut, User, XCircle } from "phosphor-react";
import React, {useContext, useState} from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import logo from "./../../assets/full-logo.svg";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";

import { 
    Avatar,
    ContainerHome, 
    DropdownMenuContainer, 
    InfoField, 
    Logo, 
    LogoField, 
    NavBar,
    RadixUIStyle,
    ToAvatar,
    ToLogout
} from "./styles/styles";


export function HomePage(){

    
    const { logout, user } = useContext(AuthContext) as ContextType;
    
    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }

    const avatar = user!.user.photoURL
    const userName:string = user!.user.displayName

    
    const handleEdit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        
    }
    
    return(
        <ContainerHome>
        <RadixUIStyle />
            <NavBar>
                <LogoField>
                    <Logo src={logo}/>
                </LogoField>
                <InfoField>
                    <DropdownMenuContainer>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                    { avatar ?  <Avatar  src={avatar} alt="" /> : <User /> }
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                                    <DropdownMenu.Item 
                                    className="DropdownMenuItem"
                                    onClick={handleEdit}
                                    >
                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <button className="ButtonTrigger">
                                                    Editar Perfil
                                                </button>
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay className="DialogOverlay" />
                                                <Dialog.Content className="DialogContent">
                                                    <Dialog.Title className="DialogTitle">Editar Perfil</Dialog.Title>
                                                    <Dialog.Description className="DialogDescription">
                                                        Faca mudanças no seu perfil aqui, clique em concluir para salvar
                                                    </Dialog.Description>
                                                    <fieldset className="Fieldset">
                                                        <label className="Label" htmlFor="name">
                                                            Nome
                                                        </label>
                                                        <input className="Input" id="name" defaultValue={userName} />
                                                    </fieldset>
                                                    <fieldset className="Fieldset">
                                                        <label className="Label" htmlFor="username">
                                                            Username
                                                        </label>
                                                        <input className="Input" id="username" defaultValue="@peduarte" />
                                                    </fieldset>
                                                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                                        <Dialog.Close asChild>
                                                            <button className="Button green">Save changes</button>
                                                        </Dialog.Close>
                                                    </div>
                                                    <Dialog.Close asChild>
                                                        <button className="IconButton" aria-label="Close">
                                                            <XCircle size={26} />
                                                        </button>
                                                    </Dialog.Close>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>
                                        
                                        <div className="RightSlot"> <PencilSimpleLine /> </div>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item 
                                    className="DropdownMenuItem"
                                    onClick={handleLogout}
                                    >
                                        Sair <div className="RightSlot"> <SignOut /> </div>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </DropdownMenuContainer>
                </InfoField>
            </NavBar>
        </ContainerHome>
    )
};

  