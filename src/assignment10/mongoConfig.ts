import mongoose from "mongoose";
import 'dotenv/config'

export const createConnection = async () => {
    try{
        if(process.env.MONGO_CONNECTION_STRING){
            const res = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
            return res;
        }else{
            throw Error("Invalid Mongo Connection String")
        }
    }catch(error){
        throw new Error("Could Not Create Connection");
    }
}