import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`the total is: ${total}\n`);
});

app.get("/", (req, res:any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`port: ${port}`);
});


module.exports = app;