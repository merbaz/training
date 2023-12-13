import Book from "./Book";

//An Inventory can have multiple admins and multiple books

class Inventory {
    private books:Book[] = [];
    private secret: string = 'vq934fpq0ej1h048h0q1'

    get bookList(){
        return this.books;
    }

    addBook(_book: Book, _secret:string){
        if(_secret === this.secret)
        this.books.push(_book);
    }

    removeBook(_book: Book, _secret:string){
        if(_secret === this.secret)
        this.books = this.books.filter(book=>book!==_book);
    }

    updateBook(_book:Book, _i:number, _secret:string){
        if(_secret === this.secret)
        this.books[_i] = _book;
    }
}

export default Inventory;