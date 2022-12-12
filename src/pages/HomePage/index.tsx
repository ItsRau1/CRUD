import React, { useContext, useEffect, useState } from "react";

import { ContextType } from "../../@types/types";

import { AuthContext} from "../../contexts/auth";

import { 
    ColloredText,
    ContainerHome, MainContainer, MainGif, MainHeader, 
} from "./styles/styles";

import { NavBar } from "../../components/NavBar";

import HiGif from "./../../assets/hi.gif"

import { addDoc, collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
 
export function HomePage(){

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

    return(
        <ContainerHome>
            <NavBar />
            <MainContainer>
                <MainHeader>
                    <h1>Ola <ColloredText>{userName}    </ColloredText> <MainGif src={HiGif}/> <br></br> Como vai? Espero que bem.</h1>
                </MainHeader>
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                        Clicar
                    </button>
                </form>
            </MainContainer>
        </ContainerHome>
    )
};

  