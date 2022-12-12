import { UserCredential } from "firebase/auth";

export type ContextType = {
    authenticated?: boolean;
    loading?: boolean;
    register: (email:string, password:string, name:string)=>void;
    login: (email:string, password:string, stayLogged:boolean)=>void;
    logout: ()=>void;
    edit: (name:string, url?:string)=>void;
    user?: UserCredential | undefined;
}
