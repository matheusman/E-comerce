export const api = 'http://localhost:3000'

type fetchApiOptions = {
    url : string;
    options : RequestInit | undefined
}

type createUser = {
    username : string;
    email : string;
    password : string
}

export const CREATE_CLIENTE_ACOUNT = (body : createUser) : fetchApiOptions => {
    return {
        url : `${api}/authenticate`,
        options : {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    }}
}