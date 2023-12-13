
class Book {
    title: string;
    author: string;
    genre: string;
    price: number;

    constructor(_title:string, _author:string, _genre: string, _price:number){
        this.title = _title;
        this.author = _author;
        this.genre = _genre;
        this.price = _price;
    }

    get bookDetails(): string{
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Price: $${this.price}`
    }
}



export default Book;


