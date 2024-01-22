import { DataSource } from "typeorm";
import Book from "./entities/Book";
import CartItem from "./entities/CartItem";
import Order from "./entities/Order";
import OrderItem from "./entities/OrderItem";
import ShoppingCart from "./entities/ShoppingCart";
import User from "./entities/User";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "root",
  database: "assignment_6",
  entities: [Book, CartItem, Order, OrderItem, ShoppingCart, User],
  logging: true,
  synchronize: true,
});

const bookRepo = AppDataSource.getRepository(Book);
const userRepo = AppDataSource.getRepository(User);
const shoppingCartRepo = AppDataSource.getRepository(ShoppingCart);
const cartItemRepo = AppDataSource.getRepository(CartItem);
const orderRepo = AppDataSource.getRepository(Order);
const orderItemRepo = AppDataSource.getRepository(OrderItem);

export {
  AppDataSource,
  bookRepo,
  userRepo,
  shoppingCartRepo,
  cartItemRepo,
  orderRepo,
  orderItemRepo,
};
