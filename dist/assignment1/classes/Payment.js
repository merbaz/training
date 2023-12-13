"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpPayment = exports.CreditCardPayment = exports.Payment = void 0;
class Payment {
    constructor(_userId, _date) {
        this.date = new Date();
        this.userId = _userId;
        this.date = _date || new Date();
    }
}
exports.Payment = Payment;
class CreditCardPayment extends Payment {
    verifyUser(_code) {
        return true;
    }
    processPayment(code) {
        const isUserVerified = this.verifyUser(code);
        if (isUserVerified) {
            return true;
        }
        return false;
    }
}
exports.CreditCardPayment = CreditCardPayment;
;
class OtpPayment extends Payment {
    constructor(_cellNumber, _userId, _date) {
        super(_userId, _date);
        this.cellNumber = _cellNumber;
    }
    sendOTP() {
        return true;
    }
    verifyOTP(_code) {
        return true;
    }
    processPayment(code) {
        const isOTPSent = this.sendOTP();
        let isOTPVerified = false;
        if (isOTPSent) {
            isOTPVerified = this.verifyOTP(code);
        }
        if (isOTPVerified) {
            return true;
        }
        return false;
    }
}
exports.OtpPayment = OtpPayment;
//# sourceMappingURL=Payment.js.map