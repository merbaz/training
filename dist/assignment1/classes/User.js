"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_name, _email, _address, _code) {
        this.name = _name;
        this.email = _email;
        this.address = _address;
        this.code = _code;
    }
    get userDetails() {
        return `name:${this.name}, email:${this.email}, address:${this.address}`;
    }
    get isEmailValid() {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return emailRegex.test(this.email);
    }
    set setCode(_code) {
        this.code = _code;
    }
    showCode(otp) {
        const isOtpVerified = otp == 123;
        if (isOtpVerified) {
            return this.code;
        }
        throw Error("OTP Not Verified");
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map