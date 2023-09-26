import React from "react";
import { CREATE_CLIENTE_ACOUNT, createUserFetch } from "./api";
import useFetch from "./Hooks/useFetch";

type globalContext = {
    createUser? : Promise<createUserFetch>;
}

const GlobalContext = React.createContext<null | globalContext>(null)

export const UserData = () : globalContext => {
    const context = React.useContext(GlobalContext)
    if (!context) throw new Error('O global Context não foi definido')
    return context
}

export function GlobalUser ({ children } : React.PropsWithChildren)  {
    return (<GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>)
}