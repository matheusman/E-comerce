import React from "react";
import {
  CREATE_CLIENTE_ACOUNT,
  GET_USER_TOKEN_VERIFY,
  GET_TOKEN,
  GET_USER,
  GET_USER_POST,
  createUserFetch,
  tokenGet,
} from "./api";
import { useNavigate } from "react-router";

type globalContext = {
  getToken: (body: GET_USER) => Promise<void>;
  userLogout: () => void;
  createClientAcount: (body: createUserFetch) => void;
  data: GET_USER_TOKEN_VERIFY | null;
  loading: boolean;
  error: string | null;
  login: boolean;
};

type MongooseErrorDuplicate = {
  code: number;
  value: {
    email?: string;
    cpf: string;
  };
};

type MongooseErrorDuplicateValue = {
  email?: string;
  cpf?: string;
};

const GlobalContext = React.createContext<null | globalContext>(null);

export const UserData = (): globalContext => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error("O global Context não foi definido");
  return context;
};

function checkUser<T>(user: unknown, keys: string[]): user is T {
  if (
    user &&
    typeof user === "object" &&
    keys.filter((props) => props in user).length !== keys.length
  ) {
    return true;
  } else {
    return false;
  }
}

type errorTokenUser = {
  err: string;
};

export function GlobalUser({ children }: React.PropsWithChildren) {
  const [data, setData] = React.useState<GET_USER_TOKEN_VERIFY | null>(null);
  const [login, setLogin] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    function userLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      navigate("/");
      window.localStorage.removeItem("token");
    },
    [navigate]
  );

  const getUser = React.useCallback(async (token: string) => {
      try {
        const { url, options } = GET_USER_POST(token);
        const response = await fetch(url, options);
        const json = await response.json();
        if (!response.ok) throw new Error(json.err); // usuario invalido
        if (checkUser<GET_USER_TOKEN_VERIFY>(json, ["password", "email"])) {
          setLogin(true);
          setData(json);
          setLoading(false);
          navigate("/");
        }
      } catch (err) {
        userLogout();
      }
    },
    [userLogout]
  );

  async function getToken(body: GET_USER) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_TOKEN(body);
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.err);
      window.localStorage.setItem("token", json.token);
      getUser(json.token)
    } catch (err) {
      if (err instanceof Error) {
        setLoading(false);
        setError(err.message);
      }
    }
  }

  async function createClientAcount(body: createUserFetch) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = CREATE_CLIENTE_ACOUNT(body);
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) {
        if (json.code === 11000) {
          if (json.value.email) throw new Error("Email duplicado");
          if (json.value.cpf) throw new Error("CPF duplicado");
        }
        throw new Error(json.err);
      }
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    } catch (err) {
      if (err instanceof Error) {
        setData(null);
        return setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, [getUser]);

  return (
    <GlobalContext.Provider
      value={{
        getToken,
        data,
        login,
        error,
        loading,
        userLogout,
        createClientAcount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
