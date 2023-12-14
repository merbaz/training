import Inventory from "../classes/Inventory";
import { BOOKS } from "../constants/dummy";

function initializeInventory(): Inventory{

    // simple initialization of inventory
    return new Inventory(BOOKS);
}


export {initializeInventory};