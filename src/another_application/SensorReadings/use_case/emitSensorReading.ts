import { Measurements } from "../../../domain/SensorReadings/Measurements";
import { PayloadSensorReadings } from "../../../domain/SensorReadings/Payload_SensorReadings";
import { SocketRepository } from "../../../domain/Socket_repository";

export class EmitSensorReadingsUseCase {
    ws: SocketRepository
    
    constructor(ws: SocketRepository){
        this.ws = ws;
    }

    public execute(user_id: number, payload: PayloadSensorReadings) {
        let measurements!: Measurements;

        measurements.filtrer_id = payload.idFiltrer;

        measurements.ph = payload.sensorReadings[0];
        measurements.tds = payload.sensorReadings[1];
        measurements.temperature = payload.sensorReadings[2];
        measurements.turbidity = payload.sensorReadings[3];

        this.ws.emitSensorReadings(user_id.toString(), measurements);
    }
}