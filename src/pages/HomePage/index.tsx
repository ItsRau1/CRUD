import { PencilSimpleLine, SignOut, User, UserCircle, UserCircleGear, XCircle } from "phosphor-react";
import React, {useContext, useEffect, useState} from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import logo from "./../../assets/full-logo.svg";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";

import { 
    Avatar,
    AvatarDefault,
    ContainerHome, 
    DropdownMenuContainer, 
    InfoField, 
    Logo, 
    LogoField, 
    NavBar,
    RadixUIStyle,
} from "./styles/styles";


export function HomePage(){

    
    const { logout, user } = useContext(AuthContext) as ContextType;

    const [userName, setUserName] = useState<string>("")
    
    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }

    const avatar = user!.user.photoURL

    useEffect(()=>{
        setUserName(user!.user.displayName)
    },[])
    

    
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
                                { avatar ?  <Avatar src={avatar} alt="" /> : <AvatarDefault><UserCircleGear size={50} color="#004457"/></AvatarDefault>}
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                                    <DropdownMenu.Item 
                                    className="DropdownMenuItem"
                                    onClick={handleEdit}
                                    >
                                        Editar Perfil
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

  