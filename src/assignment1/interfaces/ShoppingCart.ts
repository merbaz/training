import Book from "../classes/Book"

interface ShoppingCart {
    createdOn: Date;
    addBook(book: Book): void;
    removeBook(book: Book): void;
    viewCart(): Book[];

}

export default ShoppingCart;