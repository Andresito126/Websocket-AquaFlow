import { Server } from "socket.io";
import { SocketAdapter } from "./socket.io/adapters/SocketServer";
// Necesita importar el app

let socketServer: SocketAdapter;
let rabbitMQ: any;

export function startDependencies(io: Server) {
    socketServer = new SocketAdapter(io);
}

export function setSocketServer() {
    return socketServer;
}