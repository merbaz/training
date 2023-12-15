import Book from "./classes/Book";
import CartIT from "./classes/CartIT";
import CartI from "./classes/CartItem";
import Cloth from "./classes/Cloth";
import Food from "./classes/Food";
import ShoppingCart from "./classes/ShoppingCart";
import { login, signup } from "./utils/auth.utils"
import { initializeInventory } from "./utils/inventory.utils";
import { addShoppingCart, displayBooksInShoppingCart, placeBookBackInInventory, placeBookInShoppingCart } from "./utils/shopping.utils";


function main(){

    const inventory = initializeInventory();


    // user signs up
    const userOne = signup("Jake", "jake@gmail.com", "House 2, Street 3, Block A, City B", "123")
    userOne.userDetails;
    // user logs in
    const userTwo = login("maxwell@gmail.com", "abc");
    userTwo.userDetails;

    // user presses button to add shopping cart.

    const userOneShoppingCart = addShoppingCart(userOne);

    // user presses a book and add it to shopping cart.

    placeBookInShoppingCart(userOneShoppingCart, inventory, 0); // user picks first book in list
    placeBookInShoppingCart(userOneShoppingCart, inventory, 2); // user picks third book in new list

    console.log(inventory.bookList, userOneShoppingCart.books);

    placeBookBackInInventory(userOneShoppingCart, inventory, 0); // user changes mind about the first book

    console.log(inventory.bookList, userOneShoppingCart.books)

    // user presses a button to show books in cart.

    displayBooksInShoppingCart(userOneShoppingCart);



    // Cart Item Creation With Optional Params Using Unions and Intersection
    const exampleBook = new Book("A Game Of Thrones", "George R. R. Martin", "Fantasy", 20.0)

    // using the union and intersection statment in CartI, we make sure that one of the two params: quantity, and subtotal are given
    // and that a book is always given in the constructor
    const cartItemOne = new CartI({quantity:5, book:exampleBook})
    const cartItemTwo = new CartI({subtotal:60.0, book:exampleBook});

    // using one the two optional parameters, we can deduce the other parameter using exampleBook.price
    // which means we will output the desired value even if it was not given initially.

    console.log(cartItemOne.displayQuantity());
    console.log(cartItemOne.displayTotals());
    console.log(cartItemTwo.displayQuantity());
    console.log(cartItemTwo.displayTotals());


    // Using generic types to create shopping cart of different types of cart items
    const foodItem = new Food("FRUIT", 15.00, new Date("2024-1-10"));
    const bookItem = exampleBook;
    const clothItem = new Cloth("L", "Diners", "Shirt", 500.00);

    const cartItemA = new CartIT(foodItem);
    const cartItemB = new CartIT(bookItem);
    const cartItemC = new CartIT(clothItem);

    const shoppingCart = new ShoppingCart();

    shoppingCart.addItem(cartItemA);
    shoppingCart.addItem(cartItemB);
    shoppingCart.addItem(cartItemC);

    shoppingCart.displayItems();

    shoppingCart.removeItem(cartItemA);

    shoppingCart.displayItems();



}


main()