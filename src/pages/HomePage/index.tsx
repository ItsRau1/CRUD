import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";

export function HomePage(){

    const { logout, user } = useContext<any>(AuthContext);

    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }

    const emailUser = user.user.email
    const idUser = user.user.uid

    return(
        <div className="home">
            <h1>Hello</h1>
            <p>O e-mail que você esta utilizando é o <strong>{emailUser}</strong></p>
            <p>O seu ID de usuario é <strong>{idUser}</strong></p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}