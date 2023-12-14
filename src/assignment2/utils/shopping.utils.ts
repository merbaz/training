// functions in this file will help in performing different logics between classes

import Book from "../classes/Book";
import Inventory from "../classes/Inventory";
import User from "../classes/User";
import UserShoppingCart from "../classes/UserShoppingCart";


function displayBookDetails(_books: Book[]): void {

    _books.forEach((book,index) =>{
        console.log(`displaying details for book ${index+1}`);
        book.bookDetails
    })

}

function displayBooksInShoppingCart(_cart: UserShoppingCart): void{
    const books = _cart.viewCart;
    displayBookDetails(books);
}


// function called on pressing new shopping cart button
function addShoppingCart(_user: User): UserShoppingCart{
    // we can do other things here. Such as handling state, reducers, navigations etc.

    return new UserShoppingCart(_user);
}


function placeBookInShoppingCart(_cart: UserShoppingCart, _inventory: Inventory, _i:number){
    const bookList = _inventory.bookList
    // user selects a book

    const selectedBook:Book | undefined = bookList[_i]; 

    if(selectedBook){
        _inventory.removeBook(selectedBook); // remove book from inventory
        _cart.addBook(selectedBook); // add book to cart
    }
}

function placeBookBackInInventory(_cart: UserShoppingCart, _inventory: Inventory, _i:number){
    const bookList = _cart.books;
    const selectedBook:Book | undefined = bookList[_i];
    if(selectedBook){
        _cart.removeBook(selectedBook); // remove book from inventory
        _inventory.addBook(selectedBook); // add book to cart
    }
}


export {displayBookDetails, addShoppingCart, displayBooksInShoppingCart, placeBookInShoppingCart, placeBookBackInInventory}

