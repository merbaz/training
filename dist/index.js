"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = __importDefault(require("./assignment1/classes/Admin"));
const Book_1 = __importDefault(require("./assignment1/classes/Book"));
const Inventory_1 = __importDefault(require("./assignment1/classes/Inventory"));
const User_1 = __importDefault(require("./assignment1/classes/User"));
function main() {
    console.log("Creating Two Users");
    let user = new User_1.default("Alex", "lx@email.com", "l-x, st. 52, Alexburgh", "2231");
    let userTwo = new User_1.default("Joe", "joemail.com", "j, st.22, Joeburgh", "3212");
    console.log(user.userDetails, userTwo.userDetails);
    console.log(`is user email valid: ${user.isEmailValid}, is userTwo email valid: ${userTwo.isEmailValid}`);
    console.log(user.showCode(123));
    console.log("Creating A Book");
    let book1 = new Book_1.default("Artemis Fowl", "Eion Colfer", "Fantasy", 20.00);
    let book2 = new Book_1.default("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "Fantase", 15.00);
    let book3 = new Book_1.default("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "Fantase", 15.00);
    console.log(book1.bookDetails);
    console.log("Creating an Inventory");
    const inventory = new Inventory_1.default();
    console.log("Books In Inventory:", inventory.bookList);
    const adminOne = new Admin_1.default("Elon Musk", inventory);
    const adminTwo = new Admin_1.default("Mark Zingerburger", inventory);
    console.log("ADD BOOK IN INVENTORY");
    adminOne.addBookToInventory(book1);
    adminTwo.addBookToInventory(book2);
    adminTwo.addBookToInventory(book3);
    console.log("Books in Inventory:", inventory.bookList);
}
main();
//# sourceMappingURL=index.js.map