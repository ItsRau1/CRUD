import React, { useContext, useEffect, useState } from "react";
import { BoxForm, ContainerEdit, EditBox, EditButton, EditInput, FieldButton, FieldInputs, FieldTitle, StylesRadixUI } from "./styles/styles";
import { NavBar } from "../../components/NavBar";
import { MainEdit } from "./styles/styles";
import { AuthContext } from "../../contexts/auth";
import { ContextType } from "../../@types/types";
import  * as AlertDialog  from "@radix-ui/react-alert-dialog";

export function EditPage () {
    
    const { edit, user } = useContext(AuthContext) as ContextType;

    const [avatar, setAvatar] = useState<string>("")
    const [userName, setUserName] = useState<string>("")

    useEffect(()=>{
        setUserName(user!.user.displayName)
        setAvatar(user!.user.photoURL)
    },[])

    const handleEdit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        edit(userName, avatar)
    }

    return(
        <ContainerEdit>
            <NavBar />
            <MainEdit>
                <EditBox>
                    <FieldTitle>
                        <h3>Edite seu perfil aqui </h3>
                    </FieldTitle>
                    <BoxForm onSubmit={handleEdit}>
                        <FieldInputs>
                            <p>URL da imagem que deseja que seja seu avatar (Opcional)</p>
                            <EditInput 
                                type="url"
                                value={avatar}
                                onChange={(e)=> setAvatar(e.target.value)}
                                placeholder="URL do Avatar"
                            />
                            <p>Atualize seu nome</p>
                            <EditInput 
                                type="text"
                                value={userName}
                                onChange={(e)=> setUserName(e.target.value)}
                                placeholder="Seu Nome"
                                required
                            />
                        </FieldInputs>
                        <FieldButton>
                            <StylesRadixUI />
                            <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <EditButton
                                    >
                                        Editar
                                    </EditButton>
                                </AlertDialog.Trigger>
                                <AlertDialog.Portal>
                                    <AlertDialog.Overlay className="AlertDialogOverlay" />
                                    <AlertDialog.Content className="AlertDialogContent">
                                        <AlertDialog.Title className="AlertDialogTitle">Voce tem certeza?</AlertDialog.Title>
                                        <AlertDialog.Description className="AlertDialogDescription">
                                            Deseja alterar suas informacioes?
                                        </AlertDialog.Description>
                                        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                                            <AlertDialog.Cancel asChild>
                                                <button className="Button mauve">Cancelar</button>
                                            </AlertDialog.Cancel>
                                            <AlertDialog.Action asChild>
                                                <button className="Button red" onClick={handleEdit}>
                                                    Sim, desejo alterar
                                                </button>
                                            </AlertDialog.Action>   
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Portal>
                            </AlertDialog.Root>
                        </FieldButton>
                    </BoxForm>
                </EditBox>
            </MainEdit>
        </ContainerEdit>
    )
}