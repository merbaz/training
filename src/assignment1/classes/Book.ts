
class Book {
    title: string;
    author: string;
    genre: string;
    price: number;

    displayDetails(): string {
        return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Price: ${this.price}`
    }
}


export default Book;


