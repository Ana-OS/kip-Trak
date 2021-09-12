import express from 'express';
import cors from 'cors';

require('dotenv').config();
const { SERVER_PORT } = process.env;

export default class App {
    public app: express.Application;
    private portString: string = SERVER_PORT !== undefined ? SERVER_PORT : '8080';
    private port: number = +this.portString;

    constructor(controllers: any) {
        this.app = express();
        this.initMiddlewares();
        this.initControllers(controllers);
        this.listen();
    }

    private initMiddlewares() {
        this.app.use(cors());
    }

    private initControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router())
        })
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        })
    }
}