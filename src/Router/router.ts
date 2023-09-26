import { Router, Request, Response } from "express";
import Users from "../Model/Users";

const router: Router = Router();

type userTypeRes = {
  username : string;
  email : string;
  password : string | undefined;
  cpf : string;
  dateBrith : Date;
}
router.post("/create/user", async (req: Request, res: Response) => {
  try {
    const userCreate : userTypeRes = req.body; 
    
    const user : userTypeRes = await Users.create(req.body)

    user.password = undefined
    res.send({ user })
  } catch (err) {
    return res.status(400).send({ error : 'Registro falho'})
  }
});

export default router;
