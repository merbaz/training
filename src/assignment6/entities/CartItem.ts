import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ShoppingCart from "./ShoppingCart";
import Book from "./Book";

@Entity()

class CartItem {
    @PrimaryGeneratedColumn()
    id!: number

    //Multiple Cart Items can share the same shopping cart. 
    @ManyToOne(()=>ShoppingCart, (shoppingCart)=>shoppingCart.cartItems)
    shoppingCart!: ShoppingCart

    //Multiple cart items can share the same book id.
    @ManyToOne(()=>Book, (book)=>book.cartItems)
    book!: Book
}

export default CartItem