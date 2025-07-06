import { SocketRepository } from "../../../domain/Socket_repository";

export class EmitNotificationUseCase {
    ws!: SocketRepository;

    constructor(ws: SocketRepository){
        this.ws = ws;
    }

    public execute(user_id: number, notification: Notification){
        this.ws.emitNotification(user_id.toString(), notification);
    }
}