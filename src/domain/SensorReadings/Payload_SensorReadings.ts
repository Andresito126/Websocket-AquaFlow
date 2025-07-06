import { SensorReadings } from "./SensorReadings";

export interface PayloadSensorReadings {
    idUser: number,
    idFiltrer: number,
    sensorReadings: SensorReadings[] 
}