import User from "../classes/User";

function signup(_name:string, _email:string, _address:string, _code:string): User {
    return new User(_name, _email, _address, _code);
}

function login(_email:string, _code:string): User{
    // call API to login user via credentials
    // lets assume a data response
    const res = {
        name: "Maxwell",
        address: "House 5, Street 10, Block G, City F"
    }
    return new User(res.name, _email, res.address, _code)
}


export {signup, login}