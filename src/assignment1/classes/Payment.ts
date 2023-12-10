abstract class Payment {
    date: Date;
    userId: number;
    abstract processPayment(code: string): boolean
}


class CreditCardPayment extends Payment {
    verifyUser(_code: string):boolean {
        // call API to verify user
        return true
    }
    processPayment(code: string): boolean {
        // apply verifications
        const isUserVerified: boolean = this.verifyUser(code)
        if(isUserVerified){
            return true
        }
        return false
    }
};

class OtpPayment extends Payment {
    cellNumber: number;
    sendOTP(): boolean {
        //call API to send OTP
        return true;
    }  
    verifyOTP(_code: string): boolean {
        // call API to verify OTP
        return true;
    } 

    processPayment(code: string): boolean {
        //call OTP methods
        const isOTPSent: boolean = this.sendOTP();
        let isOTPVerified: boolean = false;
        if(isOTPSent){
             isOTPVerified = this.verifyOTP(code);
        }
        if(isOTPVerified){
            return true;
        }
        return false
    }

}


export { Payment, CreditCardPayment, OtpPayment};

