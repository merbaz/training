import User from "./User";

class Ticket {
    private price = 500;
    private owner:User|null = null;

    get ticketOwner(){
        return this.owner;
    }

    get ticketPrice(){
        return this.price;
    }

    set setOwner(_user:User){
        this.owner = _user;
    }

    set setPrice(_price:number){
        this.price = _price;
    }

}

export default Ticket;