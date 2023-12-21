import EventEmitter from "events";
import Invoice from "./classes/Invoice";
import Ticket from "./classes/Ticket";
import TicketManager from "./classes/TicketManager";
import User from "./classes/User";

function main(){
    let user = new User("Alex", "lx@email.com", "l-x, st. 52, Alexburgh", "2231");
    let ticket = new Ticket();
    const myEmitter = new EventEmitter();
    const ticketManager = new TicketManager(myEmitter);
    const invoice = new Invoice(myEmitter);

    invoice.onBuy();

    ticketManager.buy(ticket, user);




    console.log("-----END-----")
}


main()