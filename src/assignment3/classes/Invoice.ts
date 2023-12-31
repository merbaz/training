import EventEmitter from "events";

class Invoice {
    private emitter:EventEmitter
    constructor(_emitter:EventEmitter){
        this.emitter = _emitter;
    }

      onBuy(){
        console.log("onBuy")
        this.emitter.on('buy', (_ticketPrice:number, _userEmail:string, _timestamp:number)=>{
                console.log("TICKET BOUGHT!");
                console.log(`Price:${_ticketPrice}, Email:${_userEmail}, _timestamp:${_timestamp}`);
        }) 
    }
}   

export default Invoice;