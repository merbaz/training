import express from "express";
import { createConnection } from "./mongoConfig";
import userRouter from "./routes/users";
import bodyParser from "body-parser";

const app = express();
const port = 3001
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
createConnection()

app.use('/users', userRouter);

app.get('/blogs', [], ()=>{

})

app.listen(port,(): void => {
    console.log("server running");
});