import express, { Router } from "express";
import router from "./Router/router";
import cors from 'cors';
import path from "path";
import mongoose from 'mongoose'

class Server {
  app: express.Application;
  router: Router;
  port: number;
  constructor() {
    this.app = express();
    this.port = 3000;
    this.router = router;

    this.backConnect()
    this.Middleware();
    this.startServer();
  }

  Middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors())
    this.app.use(express.static(path.join(__dirname, '..', 'front', 'dist')))
    this.app.use("/", router);
  }

  backConnect () {
    mongoose.connect('mongodb://localhost:27017/e-comerce-pod').then( () => {
      console.log('Banco rodadando')
    }).catch( err => {
      console.log(err)
    })
  }

  startServer() {
    this.app.listen(this.port, () => console.log("Server running for success"));
  }
}

new Server();
