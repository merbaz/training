import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import CartItem from "./CartItem";

@Entity()

class ShoppingCart {
    @PrimaryGeneratedColumn()
    id!:number
    
    // A shopping cart has a many-to-one relation with User. Multiple Shopping Carts can be assigned to the same user Id.
    @ManyToOne(() => User, (user) => user.shoppingCarts)
    user!: User

    @OneToMany(() => CartItem, (cartItem) => cartItem.shoppingCart)
    cartItems!: CartItem[]

    @Column('timestamp', {default: ()=>"CURRENT_TIMESTAMP"})
    created_on!: string

}

export default ShoppingCart