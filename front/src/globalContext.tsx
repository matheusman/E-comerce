import React from "react";

type globalContext = {
    data : string;
}

const GlobalContext = React.createContext<null | globalContext>(null)

export const UserData = () : globalContext => {
    const context = React.useContext(GlobalContext)
    if (!context) throw new Error('O global Context não foi definido')
    return context
}

export function GlobalUser ({ children } : React.PropsWithChildren)  {
    return (<GlobalContext.Provider value={{data : 'user'}}>{children}</GlobalContext.Provider>)
}