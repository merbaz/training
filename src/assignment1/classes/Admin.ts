import Book from "./Book";
import Inventory from "./Inventory";

// Admin inherits Inventory
class Admin {
    name: string;
    inventory: Inventory;
    private secret: string = 'vq934fpq0ej1h048h0q1'
    constructor(_name:string, _inventory:Inventory){
        this.name = _name;
        this.inventory = _inventory;
    };

    addBookToInventory(_book: Book) {
        this.inventory.addBook(_book, this.secret);
    }

    removeBookFromInventory(_book: Book){
       this.inventory.removeBook(_book, this.secret)
    }

    updateBookInInventory(_book: Book, _i:number){
       this.inventory.updateBook(_book, _i, this.secret)
    }
}

export default Admin