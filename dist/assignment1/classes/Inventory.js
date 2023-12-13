"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
class Inventory {
    constructor() {
        this.books = [new Book_1.default("TEST", "tester", "Education", 1.00)];
        this.secret = 'vq934fpq0ej1h048h0q1';
    }
    get bookList() {
        return this.books;
    }
    addBook(_book, _secret) {
        if (_secret === this.secret)
            this.books.push(_book);
    }
    removeBook(_book, _secret) {
        if (_secret === this.secret)
            this.books = this.books.filter(book => book !== _book);
    }
    updateBook(_book, _i, _secret) {
        if (_secret === this.secret)
            this.books[_i] = _book;
    }
}
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map