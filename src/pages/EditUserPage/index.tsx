// Utils
import React,
    { 
        useContext, 
        useEffect, 
        useState 
    } 
from "react";

// Components 
import { 
    BoxForm, 
    ContainerEdit, 
    EditBox, 
    EditButton, 
    EditInput, 
    FieldButton, 
    FieldInputs, 
    FieldTitle, 
    StylesRadixUI,
    MainEdit,
    ImageContainer,
    PrevImage,
    AvatarDefault,
    FormLabel,
    FormFileInput,
} from "./styles/styles";

import { 
    NavBar 
} from "../../components/NavBar";

// Radix UI Components
import  * as AlertDialog  from "@radix-ui/react-alert-dialog";

// Context 
import { AuthContext } from "../../contexts/auth";
import { ContextType } from "../../@types/types";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services/firebaseConfig";
import { UploadSimple, UserCircleGear } from "phosphor-react";


export function EditUserPage () {
    
    const { edit, user } = useContext(AuthContext) as ContextType;

    const [userName, setUserName] = useState<string>("")
    const [stateButton, setStateButton] = useState<boolean>(false)
    const [ progress, setProgress ] = useState<string>("")
    const [ file, setFile ] = useState<any>("")
    const [ img, setImg ] = useState<string>("")



    useEffect(()=>{
        setUserName(user!.user.displayName!)
        setImg(user!.user.photoURL!)
        if(userName === ""){
            setStateButton(true)
        } else {
            setStateButton(false)
        }
    },[])

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


    const state = (value:string) => {
        if(value.length <= 1 ){
            setStateButton(true)
        } else {
            setStateButton(false)
        }
    }

    const handleEdit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        edit(userName, img)
    }

    const avatar = img.length > 5


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
                            <ImageContainer>
                                {avatar ?  <PrevImage src={img} /> : <AvatarDefault><UserCircleGear size={90} color="#004457"/></AvatarDefault>}
                                <p>{progress}</p>
                            </ImageContainer>
                                <FormLabel htmlFor="avatar">
                                    Adicionar Avatar <UploadSimple />
                                </FormLabel>
                                <FormFileInput 
                                    type="file" 
                                    id="avatar"
                                    onChange={(e:React.BaseSyntheticEvent) => setFile(e.target.files[0])}
                                />
                            <p>Atualize seu nome</p>
                            <EditInput 
                                type="text"
                                value={userName}
                                onChange={(e)=> {setUserName(e.target.value); state(e.target.value)}}
                                placeholder="Seu Nome"
                                required
                            />
                        </FieldInputs>
                        <FieldButton>
                            <StylesRadixUI />
                            <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <EditButton disabled={stateButton}
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