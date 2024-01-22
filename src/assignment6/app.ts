import express from 'express';
import { AppDataSource } from './ormConfig';
const app = express();
const port = 3001;

AppDataSource.initialize().then(async (res)=>{
    console.log("SUCCESSFULLY INITIALIZED DB")
    console.log({res})
}).catch((err)=>{
    console.log("ERROR INITIALIZING DB")
    console.log(err)
})

app.listen(port, ():void=>{
    console.log("server running")
})


