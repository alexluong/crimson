import * as express from "express"
import { Router, Request, Response } from "express"
import * as bodyParser from "body-parser"

import Database from "./database"

import RegistrationGraphQL from "graphql/registration"
import AppGraphQL from "graphql/app"

class App {
  constructor() {
    this.setup()
  }

  public app: express.Application

  public start(port: number = 8080): void {
    this.app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`)
    })
  }

  private setup(): void {
    this.app = express()
    this.config()
    const router = this.router()

    this.app.use("/", router)
    new Database()

    RegistrationGraphQL.applyMiddleware({
      app: this.app,
      path: "/registration",
    })

    AppGraphQL.applyMiddleware({
      app: this.app,
      path: "/app",
    })
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private router(): Router {
    const router = express.Router()

    router.get("/", (req: Request, res: Response) => {
      res.status(200).send({
        message: "Hello World",
      })
    })

    return router
  }
}

export default App
