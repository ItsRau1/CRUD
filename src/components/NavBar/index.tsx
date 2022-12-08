import 
React, { 
    useContext, 
    useEffect, 
    useState 
} from "react";

import { 
    AuthContext 
} from "../../contexts/auth";

import { 
    ContextType 
} from "../../@types/types";    

import { 
    useNavigate 
} from "react-router-dom";

import { 
    Avatar, 
    AvatarDefault, 
    DropdownMenuContainer, 
    InfoField, 
    Logo, 
    LogoField, 
    Nav, 
    RadixUIStyle 
} from "./styles/styles";    

import { 
    PencilSimpleLine, 
    SignOut, 
    UserCircleGear 
} from "phosphor-react";    

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import logo from "./../../assets/full-logo.svg";




export function NavBar() {

    const navigate = useNavigate();

    const { logout, user } = useContext(AuthContext) as ContextType;

    const [userName, setUserName] = useState<string>("")
    
    const avatar = user!.user.photoURL

    useEffect(()=>{
        setUserName(user!.user.displayName)
    },[])


    const handleLogout = (e:React.SyntheticEvent) => {
        e.preventDefault();
        logout();
    }
    
    const handleEdit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        navigate("/edit")
    }

    const handleToHome = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        navigate("/")
    }
    
    return (
        <Nav>
            <RadixUIStyle />
            <LogoField>
                <Logo src={logo} onClick={handleToHome}/>
            </LogoField>
            <InfoField>
                <DropdownMenuContainer>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            { avatar ?  <Avatar src={avatar} alt="" /> : <AvatarDefault><UserCircleGear size={50} color="#004457"/></AvatarDefault>}
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                                <DropdownMenu.Item 
                                className="DropdownMenuItem"
                                onClick={handleEdit}
                                >
                                    Editar Perfil
                                    <div className="RightSlot"> <PencilSimpleLine /> </div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item 
                                className="DropdownMenuItem"
                                onClick={handleLogout}
                                >
                                    Sair 
                                    <div className="RightSlot"> <SignOut /> </div>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </DropdownMenuContainer>
            </InfoField>
        </Nav>
    )
}