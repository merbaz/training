import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import Book from "./Book";

@Entity()

class OrderItem {
    @PrimaryGeneratedColumn()
    id!: number

    //multiple order items can share the same order id.
    @ManyToOne(()=>Order, (order)=>order.orderItems) 
    order!: Order

    //multiple order items can share the same book id.
    @ManyToOne(()=>Book, (book)=>book.orderItems)
    book!: Book

    @Column()
    quantity!: number

    @Column()
    price!: number
}

export default OrderItem