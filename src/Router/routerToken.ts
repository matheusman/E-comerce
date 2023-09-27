import { Router, Request, Response } from "express";
import jwtVirify from "../Middlewares/jwtVirify";

const routerToken : Router = Router()

routerToken.get('/verify', jwtVirify)

export default routerToken