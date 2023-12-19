import { foodTypes } from "../types/customTypes";


class Food {
    type: foodTypes;
    price: number;
    expires: Date;

    constructor(_type:foodTypes, _price:number, _expires:Date){
        this.type = _type;
        this.price = _price;
        this.expires = _expires
    }
}

export default Food;