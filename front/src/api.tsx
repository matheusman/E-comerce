export const api = "http://localhost:3000";

type fetchApiOptions = {
  url: RequestInfo | URL;
  options: RequestInit | undefined;
};

export type createUserFetch = {
  username: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  dateBrith: Date;
};

export type GET_USER = {
  email: string;
  password: string;
};


export const CREATE_CLIENTE_ACOUNT = (
  body: createUserFetch
): fetchApiOptions => {
  return {
    url: `${api}/authenticate/create/user`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const GET_TOKEN = (body: GET_USER) => {
  return {
    url: `${api}/authenticate/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const GET_USER_POST = (token: string) => {
  return {
    url: `${api}/authenticate/json/token/verify`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
