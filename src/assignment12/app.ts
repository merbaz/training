import process from "process";
import express, {Request} from "express";

const app = express();
const port = 3000;

app.get("/test", (_:Request, res:any) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`the total is: ${total}\n`);
});

app.get("/", (_:Request, res:any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`port: ${port}`);
  console.log(`pid: ${process.pid}`);
});
