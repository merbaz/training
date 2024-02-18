import {  NextFunction, Request, Response } from 'express';
import bcrypt from "bcrypt";
import 'dotenv/config'


export const encrypt = async (req:Request, _:Response, next:NextFunction) =>{
    try{
    const {password} = req?.body;
    if(typeof password === 'string' && process.env.SALT_ROUNDS){
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
        const hash = await bcrypt.hash(password, salt);
        req.body.password = hash;
        next()
    } else {
        next(Error("Insufficient Params For Password Hashing"))
    }
    } catch(error:any){
        next(Error(error?.message || "Error During Encryption"))
    }
}