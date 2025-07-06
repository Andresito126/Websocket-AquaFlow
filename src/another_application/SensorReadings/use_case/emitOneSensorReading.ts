import { SensorReadings } from "../../../domain/SensorReadings/SensorReadings";
import { SocketRepository } from "../../../domain/Socket_repository";

export class EmitOneSensorReadingUseCase {
    ws!: SocketRepository;

    constructor(ws: SocketRepository){
        this.ws = ws;
    }

    execute(user_id: number, payload: SensorReadings){
        this.ws.emitOneSensorReading(user_id.toString(), payload)
    }
}