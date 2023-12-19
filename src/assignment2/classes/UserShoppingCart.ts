import ShoppingCart from "../interfaces/ShoppingCart";
import Book from "./Book";
import User from "./User";

class UserShoppingCart implements ShoppingCart {
    createdOn = new Date();
    books: Book[] = [];
    owner: User;

    constructor(_owner:User){
        this.owner = _owner;
    }

    get viewCart(){
        return this.books;
    }

    addBook(_book: Book){
        this.books.push(_book);
    };

    removeBook(_book: Book){
        let filteredList = this.books.filter((book)=>book!=_book)
        this.books = filteredList;
    };
}

export default UserShoppingCart;