"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(_title, _author, _genre, _price) {
        this.title = _title;
        this.author = _author;
        this.genre = _genre;
        this.price = _price;
    }
    get bookDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Price: $${this.price}`;
    }
}
exports.default = Book;
//# sourceMappingURL=Book.js.map