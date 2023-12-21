import { address, company } from "../types/customTypes";


interface UserInterface {
    id:number;
    name:string;
    username:string;
    email:string;
    address: address;
    phone: string,
    website: string,
    company: company
}

export default UserInterface;