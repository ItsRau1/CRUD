// Utils
import React, { useContext, useEffect, useState } from "react"

import { 
    db,
    storage,
} from "../../services/firebaseConfig"

import { 
    addDoc, 
    collection, 
    serverTimestamp,
} from "firebase/firestore"

import { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL,
} from "firebase/storage"



import { ContextType } from "../../@types/types"
import { AuthContext } from "../../contexts/auth"

// Components
import { NavBar } from "../../components/NavBar"
import { 
    FormButton, 
    FormContainer, 
    FormField, 
    FormFieldButton, 
    FormInput, 
    FormInputFile, 
    FormLabelFile, 
    ImageContainer, 
    MainContainer, 
    NewTaskContainer, 
    PrevImage,
    TitleField
} from "./styles/styles"
import { UploadSimple } from "phosphor-react"

export function NewTaskPage () {

    const [ file, setFile ] = useState<any>("")
    const [ taskName, setTaskName ] = useState<string>("")
    const [ img, setImg ] = useState<string>("https://i.ibb.co/wY11Fq8/octopus-extends.png")
    const [ progress, setProgress ] = useState<string>("")



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
                    setProgress(progress + "%");
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
                        setImg(downloadURL)
                    })
                }
            )
        };

        file && uploadFile();
    }, [file])

    const { user, newTask } = useContext(AuthContext) as ContextType

    const userID  = user?.user.uid!


    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        newTask(userID, taskName, img)
    };

    
    return (
        <NewTaskContainer>
            <NavBar />
            <MainContainer>
                <ImageContainer>
                    <PrevImage src={img} />
                    <p>{progress}</p>
                </ImageContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <TitleField>
                        <h1>Adicionar uma nova tarefa</h1>
                    </TitleField>
                    <FormField>
                        <FormLabelFile htmlFor="taskImg">
                            Adicionar Imagem <UploadSimple />
                        </FormLabelFile>
                        <FormInputFile 
                            id="taskImg"
                            type="file" 
                            onChange={(e:React.BaseSyntheticEvent) => setFile(e.target.files[0])}
                            accept="image/*"
                        />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="text"
                            name="name"
                            placeholder="Nome de sua tarefa"
                            title="Insira o nome de sua tarefa"
                            onChange={(e)=> setTaskName(e.target.value)}
                            required
                        />
                    </FormField>
                    <FormFieldButton>
                        <FormButton
                            type="submit"
                        >
                            Adicionar tarefa
                        </FormButton>
                    </FormFieldButton>
                </FormContainer>
            </MainContainer>
        </NewTaskContainer>
    )
}