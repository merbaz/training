import Book from "../classes/Book";

interface ShoppingCart {
    createdOn: Date;
    addBook(book: Book): void;
    removeBook(book: Book): void;
    get viewCart(): Book[];

}

export default ShoppingCart;