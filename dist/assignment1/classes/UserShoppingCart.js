"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserShoppingCart {
    constructor() {
        this.createdOn = new Date();
        this.books = [];
    }
    addBook(_book) {
        this.books.push(_book);
    }
    ;
    removeBook(_book) {
        let filteredList = this.books.filter((book) => book != _book);
        this.books = filteredList;
    }
    ;
    viewCart() {
        return this.books;
    }
    ;
}
exports.default = UserShoppingCart;
//# sourceMappingURL=UserShoppingCart.js.map