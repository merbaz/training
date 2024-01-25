import express, {Request, Response} from "express";
import User from "../models/User";
import UserI from "../interfaces/UserI";


const usersRouter = express.Router();

usersRouter.get('/', async (_: Request, res: Response)=>{
    try {
        const result = await User.find({})
        if(result){
            res.status(200).send({message: "Success", data: result})
        }
    } catch(error){
        res.send({message: "Error Getting User List", error})
    }
})

usersRouter.post('/', async (req: Request, res: Response)=>{
    try{
        console.log({req});
        const { body: {name, email, password} } = req;
        if(!name || !email || !password){
            throw Error("Correct Payload Not Received")
        }
        const newUser:UserI = {
            name: name,
            email: email,
            password: password
        }
        console.log({newUser});
        const result = await User.create(newUser);
        if(result){
            res.status(200).send({message: "Success", data: result})
        }
    }catch(error:any){
        if(!(error instanceof Error)){
            error.message = "Error Unknown"
        }
        res.send({message: "Error Trying To Create User", error: error?.message || "Error Unknown"})
    }
})



export default usersRouter;