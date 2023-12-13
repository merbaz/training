import Admin from "./assignment1/classes/Admin";
import Book from "./assignment1/classes/Book";
import Ebook from "./assignment1/classes/Ebook";
import Inventory from "./assignment1/classes/Inventory";
import User from "./assignment1/classes/User";
import UserShoppingCart from "./assignment1/classes/UserShoppingCart";


function main(){

    // ASSIGNMENT 1


    console.log("Creating Two Users");
    let user = new User("Alex", "lx@email.com", "l-x, st. 52, Alexburgh", "2231");
    let userTwo = new User("Joe", "joemail.com", "j, st.22, Joeburgh", "3212");

    console.log(user.userDetails, userTwo.userDetails); 
    console.log(`is user email valid: ${user.isEmailValid}, is userTwo email valid: ${userTwo.isEmailValid}`)
    console.log(user.showCode(123));

    console.log("Creating A Book");
    let book1 = new Book("Artemis Fowl", "Eion Colfer", "Fantasy", 20.00)
    let book2 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "Fantase", 15.00);
    let book3 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "Fantase", 15.00);

    console.log("Book1:", book1.bookDetails);


    let eBook1 = new Ebook("A Tale of Two Cities", "Charles Dickens", "Fiction", 12.00);

    eBook1.format = "OLD ENGLISH";

    console.log("EBook:", eBook1);
   

    console.log("Creating an Inventory");
    const inventory = new Inventory();
    inventory.addBook(book1, '1234'); // Secret Is Only Present Within Admin For Authentication.
    console.log("Books In Inventory:", inventory.bookList);

    //to add and update books in inventory we need an admin

    const adminOne = new Admin("Elon Musk", inventory);
    const adminTwo = new Admin("Mark Zingerburger", inventory);

    console.log("ADD BOOK IN INVENTORY")
    adminOne.addBookToInventory(book1);
    adminTwo.addBookToInventory(book2);
    adminTwo.addBookToInventory(book3);
    console.log("Books in Inventory:", inventory.bookList);



    console.log("CREATE SHOPPING CART");

    const myShoppingCart = new UserShoppingCart();

    myShoppingCart.addBook(inventory.bookList[0]);

    console.log("myShoppingCart Books:", myShoppingCart.books);
}


main();