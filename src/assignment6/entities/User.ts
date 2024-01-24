import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  // A user has a one-to-many relation with shopping carts. A single user Id can be assigned to multiple unique shopping carts
  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.user)
  shoppingCarts!: ShoppingCart[];

  @OneToMany(() => Order, (order) => order.user)
  orders!: Order[];

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  address!: string;
}

export default User;