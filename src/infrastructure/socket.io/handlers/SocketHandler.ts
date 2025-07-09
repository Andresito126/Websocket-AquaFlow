import { Socket } from "socket.io";
import { EmitSensorReadingsUseCase } from "../../../another_application/SensorReadings/use_case/emitSensorReading";
import { setSocketServer } from "../../dependencies";
import { EmitNotificationUseCase } from "../../../another_application/Notifications/use_case/emitNotification";
import { PayloadSensorReadings } from "../../../domain/SensorReadings/Payload_SensorReadings";
import { SensorReadings } from "../../../domain/SensorReadings/SensorReadings";
import { EmitOneSensorReadingUseCase } from "../../../another_application/SensorReadings/use_case/emitOneSensorReading";

export const socketHandler = (socket: Socket) => {
    const socketAdapter = setSocketServer();
    const emitSensorReadingsUseCase = new EmitSensorReadingsUseCase(socketAdapter);
    const emitOneSensorReadingUseCase = new EmitOneSensorReadingUseCase(socketAdapter);
    const emitNotificationUseCase = new EmitNotificationUseCase(socketAdapter);

    socket.on('new_many_sensor_readings', ({ userID, sensorReadings }: { userID: number, sensorReadings: PayloadSensorReadings }) => {
        emitSensorReadingsUseCase.execute(userID, sensorReadings);
    });

    socket.on('new_one_sensor_reading', ({ userID, measurement }: { userID: number, measurement: SensorReadings }) => {
        emitOneSensorReadingUseCase.execute(userID, measurement);
    });

    socket.on('new_notification', ({ userID, notification }: { userID: number, notification: Notification }) => {
        emitNotificationUseCase.execute(userID, notification);
    })
}