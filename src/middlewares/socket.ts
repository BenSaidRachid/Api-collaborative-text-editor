import { Request, Response } from 'express';
import { Server as SocketServer } from 'socket.io';

function socketMiddleware(io: SocketServer) {
    return function (req: Request, res: Response, next): void {
        req.io = io;
        next();
    };
}

export default socketMiddleware;
