import { UserCredential } from "firebase/auth";

export type ContextType = {
    authenticated?: boolean;
    loading?: boolean;
    register: (email:string, password:string, name:string, avatar:string) => void;
    login: (email:string, password:string, stayLogged:boolean) => void;
    logout: ()=>void;
    edit: (name:string, url?:string) => void;
    user?: UserCredential | undefined;
    editTask: (task:Array<taskObject>) => void;
    taskToChange: Array<taskObject>;
    changeTask: (userID:string, taskID:string, taskName:string, img:string) => void;
}

export type taskObject =  {
    id: string;
    _document : {
        data: {
            value: {
                mapValue: {
                    fields: {
                        image: {
                            stringValue: string;
                        };
                        name: {
                            stringValue: string;
                        };
                    };
                };
            };
        };
    };
};
