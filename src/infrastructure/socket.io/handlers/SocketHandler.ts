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

    socket.on('new_many_sensor_readings', (user_id: number, payload: PayloadSensorReadings) => {
        emitSensorReadingsUseCase.execute(user_id, payload);
    });

    socket.on('new_one_sensor_reading', (user_id: number, payload: SensorReadings) => {
        emitOneSensorReadingUseCase.execute(user_id, payload);
    });

    socket.on('new_notification', (user_id: number, payload: Notification) => {
        emitNotificationUseCase.execute(user_id, payload);
    })
}