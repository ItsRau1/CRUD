//  Utils
import React, 
    { 
        useContext, 
        useEffect, 
        useState 
    } 
from "react";

import { useNavigate } from "react-router-dom";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import { collection, getDocs } from "firebase/firestore";
import { 
    db,
    storage,
} from "../../services/firebaseConfig";

import { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL,
} from "firebase/storage"


// Components 
import { 
    ButtonNewTask,
    ColloredText,
    ContainerHome, 
    MainContainer, 
    MainContent, 
    MainGif, 
    MainHeader, 
    TitleField, 
} from "./styles/styles";

import { NavBar } from "../../components/NavBar";

// Assets
import HiGif from "./../../assets/hi.gif"
import { PlusCircle } from "phosphor-react";

 
export function HomePage(){

    const navigate = useNavigate();

    const { user } = useContext(AuthContext) as ContextType

    const userName = user?.user.displayName
    const userID  = user?.user.uid


    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            let list:any = [];
            const querySnapshot = await getDocs(collection (db, `${userID}`));
            querySnapshot.forEach((doc) =>{
                list.push(doc);
            });
            setData(list)
        }
        fetchData()
    },[])

    console.log(data)

    const handleAddNewTask = () => {
        navigate("/new")
    }

    return(
        <ContainerHome>
            <NavBar />
            <MainContainer>
                <MainHeader>
                    <h1>Ola <ColloredText>{userName}    </ColloredText> <MainGif src={HiGif}/> <br></br> Como vai? Espero que bem.</h1>
                </MainHeader>
                <MainContent>
                    <TitleField>
                        <h2>Adicione uma <ColloredText>nova tarefa</ColloredText>.</h2>
                    </TitleField>
                        <ButtonNewTask onClick={handleAddNewTask}>
                            Adicionar uma nova tarefa <PlusCircle />
                        </ButtonNewTask>

                </MainContent>
            </MainContainer>
        </ContainerHome>
    )
};

  