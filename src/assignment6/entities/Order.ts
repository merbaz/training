import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import OrderItem from "./OrderItem";

@Entity()

class Order {
   @PrimaryGeneratedColumn()
   id!: number
   
   @ManyToOne(()=>User, (user)=>user.orders)
   user!: User

   @OneToMany(()=>OrderItem, (orderItem)=>orderItem.order)
   orderItems!: OrderItem

   @Column()
   createdOn!: Date

   @Column()
   completedOn!: Date

   @Column()
   totalAmount!: number
}

export default Order