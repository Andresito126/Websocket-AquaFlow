import { SensorReadings } from "./SensorReadings";

export interface Measurements {
    filtrer_id: number,
    temperature: SensorReadings,
    tds: SensorReadings,
    ph: SensorReadings,
    turbidity: SensorReadings,
}