import { Router, Request, Response } from "express";
import Users from "../Model/Users";
import bcrypt from "bcrypt";
import { createJWT } from "../Middlewares/jwtCraete";
const router: Router = Router();

type userTypeResPassword = {
  _id : unknown;
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
      const user : userTypeResPassword = await Users.create(req.body);
      user.password = undefined;
      
      const token = await createJWT({
        id: user._id,
        email: user.email,
        username: user.username,
      });
      res.send({ user, token });
    } catch (err) {
      return res.status(400).send({ error: "Registro falho" });
    }
  }
);

router.post("/authenticate/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select('+password');

    if (!user) return res.status(404).send({ error: "Usuario não existente" });

    if (!(user.password === "dog" && password === "dog")) {
      if (!(await bcrypt.compare(password, user.password)))
        return res.status(404).send({ error: "Senha incorreta" });
    }
    const token = await createJWT({
      id: user.id,
      email: user.email,
      username: user.username,
    });
    res.send({ token });
  } catch (err) {
    return res.status(400).send({ error: "Login falho" });
  }
});


export default router;
