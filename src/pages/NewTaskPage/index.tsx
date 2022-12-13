// Utils
import React, { useContext, useEffect, useState } from "react"

import { 
    db,
    storage,
} from "../../services/firebaseConfig"

import { 
    addDoc, 
    collection, 
    serverTimestamp 
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
import { NewTaskContainer } from "./styles/styles"

export function NewTaskPage () {

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

    const { user } = useContext(AuthContext) as ContextType

    const userName = user?.user.displayName
    const userID  = user?.user.uid


    const handleSubmit = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        await addDoc(collection(db, `${userID}`),{
            name: "Mogi das Cruzes",
            state: "SP",
            country: "Brazil",
            timeStamp: serverTimestamp()
        })
    };

    
    return (
        <NewTaskContainer>
            <NavBar />
            <input 
                type="file" 
                onChange={(e) => setFile(e.target.files[0])}
            />
        </NewTaskContainer>
    )
}