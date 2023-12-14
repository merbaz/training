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

}


main()