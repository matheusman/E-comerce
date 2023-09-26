export const api = 'http://localhost:3000'

type fetchApiOptions = {
    url : RequestInfo | URL;
    options : RequestInit | undefined
}

export type createUserFetch = {
    username : string;
    email : string;
    password : string | undefined;
    cpf : string;
    phone : string;
    dateBrith : Date;
}

export type GET_USER = {
    email : string;
    password : string;
}

export type getToken = {
    token : string;
}

export const CREATE_CLIENTE_ACOUNT = (body : createUserFetch) : fetchApiOptions => {
    return {
        url : `${api}/create/user`,
        options : {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    }}
}

export const GET_USER_POST = (body : GET_USER) => {
    return {
        url : `${api}/authenticate/login`,
        options : {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    }}
}

export const GET_TOKEN = (token : getToken) => {
    return {
        url : `${api}/authenticate/token`,
        options : {
        method : 'POST',
        headers : {
            'Authorization' : `Bearrer ${token}`
        },
    }}
}