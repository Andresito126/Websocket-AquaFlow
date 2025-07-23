import { Socket } from "socket.io";
import { EmitSensorReadingsUseCase } from "../../../another_application/SensorReadings/use_case/emitSensorReading";
import { setSocketServer } from "../../dependencies";
import { EmitNotificationUseCase } from "../../../another_application/Notifications/use_case/emitNotification";
import { PayloadSensorReadings } from "../../../domain/SensorReadings/Payload_SensorReadings";

export const socketHandler = (socket: Socket) => {
    const socketAdapter = setSocketServer();
    const emitSensorReadingsUseCase = new EmitSensorReadingsUseCase(socketAdapter);
    const emitNotificationUseCase = new EmitNotificationUseCase(socketAdapter);

    socket.on('new_many_sensor_readings', ({ userID, sensorReadings }: { userID: number, sensorReadings: PayloadSensorReadings }) => {
        emitSensorReadingsUseCase.execute(userID, sensorReadings);
    });

    socket.on('new_notification', ({ userID, notification }: { userID: number, notification: Notification }) => {
        emitNotificationUseCase.execute(userID, notification);
    })
}