import Book from "../classes/Book"

type quantityParam = {quantity:number}
type subtotalParam= {subtotal:number}
type bookParam = {book: Book}

type foodTypes = "FRUIT" | "VEGETABLE" | "MEAT";
type clothSizes = "S" | "M" | "L" | "XL"; 

export {quantityParam, subtotalParam, bookParam, foodTypes, clothSizes}