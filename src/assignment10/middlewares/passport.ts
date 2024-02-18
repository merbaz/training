import passport from "passport";
import {Strategy} from "passport-local";
import User from "../models/User";
import bcrypt from "bcrypt";

passport.use(new Strategy(
    async function (email:string, password:string, done) {
            const user = await User.findOne({email:email}).exec();
            if(user?.password){
                const match = await bcrypt.compare(password, user.password)
                if(!match){
                    done(new Error("Password Invalid"), false, {message: "Password Invalid"})
                }
                done(null, user)
            }
            done(new Error("User Email Invalid"), false, {message: "User Email Invalid"})
        }
));

//Persists user data inside session
passport.serializeUser(function (user, done) {
    done(null, user);
});

//Fetches session details using session id
passport.deserializeUser(function (id, done) {
    User.findOne({id}).exec().then((user)=>{
        done(null, user);
    }).catch((error)=>{
        done(error, false);
    })
});

