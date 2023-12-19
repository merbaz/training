class User {
    private name: string;
    private email: string;
    private address: string;
    private code: string;
    private isLoggedIn: boolean = false;
    private password: string;

    constructor(_name: string, _email: string, _address: string, _code: string ){
        this.name = _name;
        this.email = _email;
        this.address = _address;
        this.code = _code;
        this.password = _code;
    }
    // A getter function makes the function a property of the instance rather than the method.
    get userDetails():string{
        return `name:${this.name}, email:${this.email}, address:${this.address}`;
    } 
    get userName():string{
        return this.name;
    }

    get userEmail():string{
        return this.email;
    }

    get userAddress():string{
        return this.address;
    }

    get userIsLoggedIn(): boolean {
        return this.isLoggedIn
    }

    get userPassword(): string {
        return this.password;
    }

    get isEmailValid():boolean{
        const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return emailRegex.test(this.email);
    }

    // A setter function is mostly used when trying to set a private variable of the class.

    set userName(_name:string){
        this.name = _name;
    }

    set userEmail(_email: string){
        this.email = _email
    }

    set userAddress(_address: string){
        this.address = _address;
    }

    set userPassword(_password: string){
        this.password = _password;
    }

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

    loginUser(_password: string){
        if (this.password === _password)
            this.isLoggedIn = true;
    }

    logoutUser(){
        this.isLoggedIn = false;
    }

}

export default User;