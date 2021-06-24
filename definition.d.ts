declare type SocketServer = import('socket.io').Server;

declare namespace Express {
    export interface Request {
        io: SocketServer;
    }
}
