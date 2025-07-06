import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import express from 'express';
import { SensorReadings } from '../../../domain/SensorReadings/SensorReadings';
import { Measurements } from '../../../domain/SensorReadings/Measurements';
import { SocketRepository } from '../../../domain/Socket_repository';

export class SocketAdapter implements SocketRepository {
  constructor(private io: Server){}

  /*
  private io!: Server;

  constructor(private app = express()) {}

  public startServer(port: number) {
    const httpServer = createServer(this.app);
    this.io = new Server(httpServer, {
      cors: { origin: '*' },
    });

    this.io.on('connection', this.handleConnection.bind(this));

    httpServer.listen(port, () => {
      console.log(`Servidor Socket.io escuchando en puerto ${port}`);
    });
  }

  private handleConnection(socket: Socket) {
    console.log('Cliente conectado:', socket.id);

    socket.on('mensaje', (data: string) => {
      console.log('Mensaje recibido:', data);
      socket.emit('respuesta', `Echo: ${data}`);
    });

    socket.on('new_sensor_readings', (sensorReadings: Measurements) => {
      console.log('Mediciones de sensores recibidas:', sensorReadings);
      socket.emit('send_sensor_readings', sensorReadings)
    });

    socket.on('new_notification', (notification: Notification) => {
      console.log('Notificación recibida:', notification)
      socket.emit('send_notification', notification)
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  }
    */

  public emitEventoGlobal(evento: string, payload: any) {
    this.io.emit(evento, payload);
  }

  public emitSensorReadings(user_id: string, payload: Measurements) {
    this.io.to(user_id).emit("send_sensor_readings", payload)
  }

  public emitNotification(user_id: string, payload: Notification) {
    this.io.to(user_id).emit("send_notification", payload);
  }

  public emitOneSensorReading(user_id: string, payload: SensorReadings) {
    this.io.to(user_id).emit("send_one_sensor_reading", payload)
  }
}