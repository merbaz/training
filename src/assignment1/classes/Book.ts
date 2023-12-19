
class Book {
    private title: string;
    private author: string;
    private genre: string;
    private price: number;

    constructor(_title:string, _author:string, _genre: string, _price:number){
        this.title = _title;
        this.author = _author;
        this.genre = _genre;
        this.price = _price;
    }

    set setTitle (_title: string){
        this.title = _title
    }

    set setAuthor (_author: string){
        this.author = _author;
    }

    set setGenre  (_genre: string){
        this.genre = _genre;
    }

    set setPrice (_price: number){
        this.price = _price;
    }

    get bookDetails(): string{
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Price: $${this.price}`
    }

    get bookTitle(): string{
        return this.title;
    }

    get bookAuthor(): string{
        return this.author;
    }

    get bookGenre(): string {
        return this.genre;
    }

    get bookPrice(): number {
        return this.price;
    }
}



export default Book;


