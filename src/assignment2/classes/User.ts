class User {
    name: string;
    email: string;
    address: string;
    private code: string;
    constructor(_name: string, _email: string, _address: string, _code: string ){
        this.name = _name;
        this.email = _email;
        this.address = _address;
        this.code = _code;
    }
    // A getter function makes the function a property of the instance rather than the method.
    get userDetails():string{
        return `name:${this.name}, email:${this.email}, address:${this.address}`;
    } 
    get isEmailValid():boolean{
        const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return emailRegex.test(this.email);
    }

    // A setter function is mostly used when trying to set a private variable of the class.
    set setCode(_code:string){
        this.code = _code;
    }

    showCode(otp:number){
        //use API to verify OTP
        const isOtpVerified = otp == 123; // this is just a placeholder
        if(isOtpVerified){
            return this.code;
        }
        throw Error("OTP Not Verified");
    }

}

export default User;