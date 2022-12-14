import express, {Express} from 'express'
import cors from 'cors'

class App {
    server: Express

    constructor() {
        this.server = express()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes() {}
}

export default new App().server