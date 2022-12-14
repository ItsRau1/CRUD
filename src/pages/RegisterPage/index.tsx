//Utils
import React, { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import { 
    storage,
} from "../../services/firebaseConfig"

import { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL,
} from "firebase/storage"

// Components
import { 
    AsideLabel,
    FormButton, 
    FormField, 
    FormFileInput, 
    FormInput, 
    FormRegister, 
    FormTitle, 
    LinkField, 
    RegisterContainer 
} from "./styles/styles";

// Context
import { AuthContext } from "../../contexts/auth";

import { ContextType } from "../../@types/types";


export function RegisterPage(){

    const { register } = useContext(AuthContext) as ContextType;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ file, setFile ] = useState<any>("")

    useEffect(()=>{
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;

            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = 
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is" + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL)
                    })
                }
            )
        };

        file && uploadFile();
    }, [file])


    const handleSumit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        register(email, password, name);
    }

    return (
        <RegisterContainer>
            <AsideLabel></AsideLabel>
            <FormRegister onSubmit={handleSumit}>
                <FormTitle>
                    <h1>Registre-se</h1>
                    <p>Venha utilizar o melhor CRUD</p>
                </FormTitle>
                <FormField>
                    <FormFileInput 
                        type="file" 
                        onChange={(e:React.BaseSyntheticEvent) => setFile(e.target.files[0])}
                    />
                    <FormInput
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        title="Insira seu nome"
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        title="Insira seu E-mail"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        title="Insira sua senha"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Sua Senha"
                        required
                    />
                </FormField>

                    <FormButton type="submit" title="Registrar-se">
                        Registrar-se
                    </FormButton>   
                    <LinkField>
                        <NavLink to="/login" title="Login">
                            Voltar ao Login
                        </NavLink>
                    </LinkField>
            </FormRegister>
        </RegisterContainer>
    )
}