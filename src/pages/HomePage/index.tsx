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

import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

// Components 
import { 
    ButtonNewTask,
    ButtonsBox,
    ColloredText,
    ContainerHome, 
    DeletButton, 
    EditButton, 
    MainContainer, 
    MainContent, 
    MainGif, 
    MainHeader, 
    TaskBox, 
    TaskInfo, 
    TaskLogo, 
    TasksContainer, 
    TextAddNewTasks, 
    TitleField, 
} from "./styles/styles";

import { NavBar } from "../../components/NavBar";

// Assets 
import HiGif from "./../../assets/hi.gif"
import { PlusCircle } from "phosphor-react";

 
export function HomePage(){

    const navigate = useNavigate();

    const { user, editTask } = useContext(AuthContext) as ContextType

    const userName = user?.user.displayName
    const userID  = user?.user.uid


    const [ data, setData ] = useState([])
    const dataLength = data.length > 0


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

    const handleAddNewTask = () => {
        navigate("/new")
    }

    const handleDelet = async (id:string) => {
        await deleteDoc(doc(db, `${userID}`, id))
        setData(data.filter((item)=> item.id !== id))
    }

    const handleEdit = (id) => {
        const taskToChange = (data.filter((item)=> item.id === id))
        editTask(taskToChange)
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
                        Adicionar uma nova tarefa <PlusCircle size={22}/>
                    </ButtonNewTask>
                    <TasksContainer>
                        { dataLength ?
                            data.map((task)=>{
                                return (
                                    <TaskBox key={task.id} id={task.id}>
                                        <TaskInfo>
                                            <TaskLogo src={task._document.data.value.mapValue.fields.image.stringValue} />
                                            <p>{task._document.data.value.mapValue.fields.name.stringValue}</p>
                                        </TaskInfo>
                                        <ButtonsBox>
                                            <EditButton onClick={(e) => handleEdit(task.id)}>
                                                Editar
                                            </EditButton>
                                            <DeletButton onClick={(e) => handleDelet(task.id)}>
                                                Deletar
                                            </DeletButton>
                                        </ButtonsBox>
                                    </TaskBox>
                                )   
                            }) :
                            <TextAddNewTasks>
                                <ColloredText> Adicione Tarefas </ColloredText>
                            </TextAddNewTasks>
                        }
                    </TasksContainer>
                </MainContent>
            </MainContainer>
        </ContainerHome>
    )
};

  