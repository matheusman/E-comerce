import { Router, Request, Response } from "express";
import Users from "../Model/Users";

const router: Router = Router();

router.post("/create/user", async (req: Request, res: Response) => {
  const user = await Users.create(req.body)
  res.send(user)
});

export default router;
