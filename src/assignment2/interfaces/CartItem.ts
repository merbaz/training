import { quantityParam, subtotalParam, bookParam } from "../types/customTypes";


interface CartItem {
    params: (quantityParam | subtotalParam) & bookParam 
    discountCode: number | string;
    displayTotals:() => string;
    displayQuantity:() => string;
}


export default CartItem;