import { Measurements } from "./SensorReadings/Measurements";
import { SensorReadings } from "./SensorReadings/SensorReadings";

export interface SocketRepository{
    emitEventoGlobal(evento: string, payload: any): void
    emitSensorReadings(user_id: string, payload: Measurements): void
    emitNotification(user_id: string, payload: Notification): void
}