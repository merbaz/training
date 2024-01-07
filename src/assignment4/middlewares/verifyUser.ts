import {  NextFunction, Request, Response } from 'express';

export function verifyUserId(req:Request, _:Response, next:NextFunction){
    if(typeof req.body.userId !== "string"){
        next(new Error("userId Does Not Exist"))
    }
    next()
}