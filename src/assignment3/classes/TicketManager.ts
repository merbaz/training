import EventEmitter from "events";
import Ticket from "./Ticket";
import User from "./User";


class TicketManager {
    private emitter:EventEmitter
    constructor(_emitter:EventEmitter){
        this.emitter = _emitter;
    }

    buy(_ticket:Ticket, _user:User){
        _ticket.setOwner = _user;
        const timestamp:number = new Date().valueOf()
        this.emitter.emit('buy', _ticket.ticketPrice, _user.userEmail, timestamp);
    }

}

export default TicketManager;