import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

type headersAuthorazation = {
  authorization: string;
};

const typeGuardAuthorization = (
  header: unknown
): header is headersAuthorazation => {
  if (header && typeof header === "object" && "authorization" in header) {
    return true;
  } else {
    return false;
  }
};

export default function (req: Request, res: Response, next: NextFunction) {
  const header = req.headers;
  if (typeGuardAuthorization(header)) {
    const parts = header.authorization.split(" ");
    if (parts.length !== 2) return res.status(401).send({err : "Token Malformated"})

    const [schema, token] = parts
    if (!/^Bearer$/i.test(schema)) return res.status(401).send({ err: "Coloque o Bearrer" });

    if (!process.env.HASH) return res.status(400).send({err : 'HASH não definido'}) 
    jwt.verify(token, process.env.HASH, (err, decoded) => {
        if (err) return res.status(401).send({ err : 'token invalido'})
        if (decoded && typeof decoded === 'object' && 'body' in decoded) {
          res.send(decoded.body)
        }
        return next()
    })

    } else return res.status(404).send({ err: "No token provider" });
  
}
