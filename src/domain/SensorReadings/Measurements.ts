import { SensorReadings } from "./SensorReadings";

export interface Measurements {
    filtrer_id: string,
    temperature: SensorReadings,
    tds: SensorReadings,
    ph: SensorReadings,
    turbidity: SensorReadings,
}