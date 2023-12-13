"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(_name, _inventory) {
        this.secret = 'vq934fpq0ej1h048h0q1';
        this.name = _name;
        this.inventory = _inventory;
    }
    ;
    addBookToInventory(_book) {
        this.inventory.addBook(_book, this.secret);
    }
    removeBookFromInventory(_book) {
        this.inventory.removeBook(_book, this.secret);
    }
    updateBookInInventory(_book, _i) {
        this.inventory.updateBook(_book, _i, this.secret);
    }
}
exports.default = Admin;
//# sourceMappingURL=Admin.js.map