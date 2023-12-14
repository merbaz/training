import Book from "./Book";

//An Inventory can have multiple admins and multiple books

class Inventory {
    private books:Book[] = [];

    constructor(_books:Book[]){
        this.books = _books;
    }

   get bookList(){
        return this.books;
    }

    addBook(_book: Book){
        this.books.push(_book);
    }

    removeBook(_book: Book,){
        this.books = this.books.filter(book=>book!==_book);
    }

    updateBook(_book:Book, _i:number){
        this.books[_i] = _book;
    }
}

export default Inventory;