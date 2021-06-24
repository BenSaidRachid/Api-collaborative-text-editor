import express, { Express } from 'express';
import { createServer, Server as HttpsServer } from 'http';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import { info } from './helpers/log';

export default class Server {
    private _host: string;
    private _port: number;
    private _app: Express | undefined;
    private _server: HttpsServer | undefined;

    public constructor(host: string, port: number) {
        this._host = host;
        this._port = port;
    }

    private async _initialize(): Promise<void> {
        this._app = express();
        this._app.use(cors());
        this._app.use(helmet());
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use('/api', routes);
    }

    public async run(): Promise<void> {
        await this._initialize();
        if (this._app)
            this._server = createServer(this._app).listen(this._port, () => {
                info(`Server is  listening on ${this._host}:${this._port}`);
            });
    }

    public get app(): Express.Application | undefined {
        return this._app;
    }

    public close(): void {
        this._server?.close();
    }
}
