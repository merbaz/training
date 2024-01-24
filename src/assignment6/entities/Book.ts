import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";

@Entity()

class Book {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToMany(()=> CartItem, (cartItem)=>cartItem.book)
    cartItems!: CartItem[]

    @OneToMany(()=> OrderItem, (orderItem)=>orderItem.book)
    orderItems!: OrderItem[]

    @Column()
    title!: string

    @Column()
    author!: string

    @Column("decimal", {precision: 10, scale:2, default:'0.00'}) // max value: 99999999.99
    price!: number

    @Column("int", {default: '0'})
    quantity!: number
}


export default Book;