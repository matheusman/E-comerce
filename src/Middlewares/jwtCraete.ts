import jwt from 'jsonwebtoken';

type User = {
    id : unknown;
    email : string;
    username : string;
}

export async function createJWT (body : User) {
    if (process.env.HASH) {
        return jwt.sign({ body }, process.env.HASH, {
            expiresIn : 86400,
        })
    } else {
        return { err : 'HASH não existente'}
    }   
}