// import cluster from "cluster";
// import http from "http";
// import { availableParallelism } from "os";
import process from "process";
import express from "express";

const app = express();
const port = 3000;

app.get("/test", (_, res)=>{
    let total = 0;
    for(let i = 0; i<5_000_000; i++){
        total++;
    }
    res.send(`the total is: ${total}\n`)
})


app.listen(port, ()=>{
    console.log(`port: ${port}`);
    console.log(`pid: ${process.pid}`)
})



