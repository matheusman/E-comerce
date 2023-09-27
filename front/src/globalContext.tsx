import React from "react";
import { CREATE_CLIENTE_ACOUNT, GET_USER_TOKEN_VERIFY, GET_TOKEN, GET_USER, GET_USER_POST, createUserFetch, tokenGet} from "./api";

type globalContext = {
  getToken : (body: GET_USER) => Promise<void>;
  data : GET_USER_TOKEN_VERIFY | null;
  loading : boolean;
  error : string | null; 
  login : boolean;
};

const GlobalContext = React.createContext<null | globalContext>(null);

export const UserData = (): globalContext => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error("O global Context não foi definido");
  return context;
};

function checkUser <T>(user : unknown, keys : string[] ) : user is T {
    if (user && typeof user === 'object' && keys.filter( props => props in user).length !== keys.length) {
        return true
    } else {
        return false
    }
} 

export function GlobalUser({ children }: React.PropsWithChildren) {

    const [data, setData] = React.useState<GET_USER_TOKEN_VERIFY | null>(null)
    const [login, setLogin] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    async function getUser (token : string) {
        const { url, options } = GET_USER_POST(token);
        const response = await fetch(url, options);
        
        const json = await response.json()
        if (checkUser<GET_USER_TOKEN_VERIFY>(json, ['username', 'email'])) {
            setData(json)
        }
    }
    
    async function getToken (body : GET_USER) {
        const {url, options} = GET_TOKEN(body)
        const response = await fetch(url, options)
        const { token } = await response.json();
        window.localStorage.setItem('token', token)
        getUser(token)
    }

  return <GlobalContext.Provider value={{getToken, data, login, error, loading}}>{children}</GlobalContext.Provider>;
}
