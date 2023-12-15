import Book from "./Book";
import Cloth from "./Cloth";
import Food from "./Food";


class CartIT<T extends Book | Food | Cloth> {
    item: T;
    constructor(_item:T){
        this.item = _item;

    }
}


export default CartIT;