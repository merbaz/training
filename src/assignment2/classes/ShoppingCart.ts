import Book from "./Book";
import CartIT from "./CartIT";
import Cloth from "./Cloth";
import Food from "./Food";

// In This Class, T Represents The Type Of Item That CartIT Can Be By Restricting It With Union

class ShoppingCart<T extends Book | Food | Cloth> { 
    items: CartIT<T>[] = []; 

    get getItems(){
        return this.items;
    }

    displayItems(){
        console.log("DISPLAYING CART ITEMS")
        this.items.forEach(({item})=>{
            if(item instanceof Book){
                console.log(item.bookDetails);
            }
            else if(item instanceof Cloth){
                console.log(`Cloth brand:${item.brand}, size: ${item.size}, price: ${item.price}, type:${item.type}`);
            }
            else if(item instanceof Food){
                console.log(`Food type: ${item.type}, price: ${item.price}, expires: ${item.expires.toLocaleDateString()}`)
            }

        })
    }

    addItem(_item: CartIT<T>){
        this.items.push(_item);
    }

    removeItem(_item: CartIT<T>){
        this.items = this.items.filter(item=>item!==_item)
    }

    displayTotalPrice(){
        let total = 0;
        this.items.forEach(cartItem =>{
            total += cartItem.item.price;
        })
    }

}

export default ShoppingCart;