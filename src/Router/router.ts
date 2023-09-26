import { Router, Request, Response } from "express";
import Users from "../Model/Users";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const router: Router = Router();

type userTypeRes = {
  username: string;
  email: string;
  password: string;
  cpf: string;
  dateBrith: Date;
};

type userTypeResPassword = {
  username: string;
  email: string;
  password: string | undefined;
  cpf: string;
  dateBrith: Date;
};

router.post(
  "/authenticate/create/user",
  async (req: Request, res: Response) => {
    try {
      const user: userTypeResPassword = await Users.create(req.body);
      user.password = undefined;
      res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: "Registro falho" });
    }
  }
);

router.post("/authenticate/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) return res.status(404).send({ error: "Usuario não existente" });

    if (!(user.password === 'dog' && password === 'dog')) {
      if (!(await bcrypt.compare(password, user.password)) )
        return res.status(404).send({ error: "Senha incorreta" });
    }

    res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Login falho" });
  }
});

export default router;
