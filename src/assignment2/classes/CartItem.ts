import CartItem from "../interfaces/CartItem";
import { bookParam, quantityParam, subtotalParam } from "../types/customTypes";

class CartI implements CartItem{
    params: (quantityParam | subtotalParam) & bookParam
    discountCode: number | string = 0;

    constructor(_params:(quantityParam | subtotalParam) & bookParam){
        this.params = _params;
    }

    displayTotals(){
        if("quantity" in this.params){
            let subtotal = this.params.book.price * this.params.quantity
            return `Subtotals Are: ${subtotal}`
        } 
        return `Subtotals Are: ${this.params.subtotal}`
    };

    displayQuantity(){
        if("subtotal" in this.params){
            let quantity = this.params.subtotal / this.params.book.price;
            return `Quantity Of Book Is: ${quantity}`
        } 
        return `Qutantity Of Book Is: ${this.params.quantity}`
    };


}


export default CartI