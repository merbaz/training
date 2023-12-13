import ShoppingCart from "../interfaces/ShoppingCart";
import Book from "./Book";

class UserShoppingCart implements ShoppingCart {
    createdOn = new Date();
    books: Book[] = [];

    addBook(_book: Book){
        this.books.push(_book);
    };

    removeBook(_book: Book){
        let filteredList = this.books.filter((book)=>book!=_book)
        this.books = filteredList;
    };

    viewCart(){
        return this.books
    };
}

export default UserShoppingCart;