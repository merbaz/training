class User {
    name: string;
    email: string;
    address: string;

    constructor(_name: string, _email: string, _address: string ){

        if(this.validateEmail(_email)){
            this.email = _email
        }else {
            throw Error("Invalid Email String")
        }
        this.name = _name;
        this.address = _address
    }

    private validateEmail(email: string):boolean {
        const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return emailRegex.test(email);
    }

    
}

export default User;