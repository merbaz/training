import { clothSizes } from "../types/customTypes";

class Cloth {
    size: clothSizes;
    brand: string;
    type: string;
    price: number;

    constructor(_size:clothSizes, _brand:string, _type:string, _price: number){
        this.size = _size;
        this.brand = _brand;
        this.type = _type;
        this.price = _price;
    }
}

export default Cloth;