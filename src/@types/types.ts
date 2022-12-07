import { UserCredential } from "firebase/auth";

export type ContextType = {
    authenticated?: boolean;
    loading?: boolean;
    register: (email:string, password:string, name:string)=>void;
    login: (email:string, password:string)=>void;
    logout: ()=>void;
    update: (name:string)=>void;
    user?: UserCredential | undefined;
}