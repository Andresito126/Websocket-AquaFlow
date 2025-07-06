import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketHandler } from './src/infrastructure/socket.io/handlers/SocketHandler';
import { startDependencies } from './src/infrastructure/dependencies';

const app = express();
const httpServer = createServer(app);
const io = new Server (httpServer, {
    "cors": { "origin": "*" },
});

startDependencies(io)

io.on("connection", (socket) => {
    socket.on('join_room', (room: number) => {
        socket.join(room.toString()); // Siendo la room, el ID del usuario
    });

    socketHandler(socket);
});

httpServer.listen(8000, () => {
    console.log("Socket.io on line")
})