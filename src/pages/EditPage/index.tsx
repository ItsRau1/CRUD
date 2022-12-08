import React, { useContext, useEffect, useState } from "react";
import { BoxForm, ContainerEdit, EditBox, EditButton, EditInput, FieldButton, FieldInputs, FieldTitle } from "./styles/styles";
import { NavBar } from "../../components/NavBar";
import { MainEdit } from "./styles/styles";
import { AuthContext } from "../../contexts/auth";
import { ContextType } from "../../@types/types";

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
                            <EditButton
                                type="submit"
                            >
                                Editar
                            </EditButton>
                        </FieldButton>
                    </BoxForm>
                </EditBox>
            </MainEdit>
        </ContainerEdit>
    )
}