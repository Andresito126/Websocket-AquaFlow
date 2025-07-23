import { SensorReadings } from "./SensorReadings";

export interface PayloadSensorReadings {
    idUser: string,
    idFiltrer: string,
    sensorReadings: SensorReadings[] 
}